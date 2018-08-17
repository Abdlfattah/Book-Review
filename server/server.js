// IMPORT LIBRARIES
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')


//IMPORT MIDDLEWARE
const { auth } = require('./middleware/auth')

// IMPORT CONFIG FILE 
const config = require('./config/config').get(process.env.NODE_ENV)

// INIT EXPRESS
const app = express()


// PREPARE AND CONNECT MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE)


// IMPORT MODELS
const { User } = require('./models/user')
const { Book } = require('./models/book')

app.use(bodyParser.json())
app.use(cookieParser())

//GET
app.get('/api/get_book',(req,res)=>{
    id = req.query.id
    Book.findById(id,(err,doc)=>{
        if(err) return res.status(404).send(err)
        res.status(200).send(doc)
    })
})

app.get('/api/get_books',(req,res)=>{
    const skip = parseInt(req.query.skip)
    const limit = parseInt(req.query.limit)
    const order = req.query.order
    Book.find().skip(skip).limit(limit).sort({_id:order}).exec((err,doc)=>{
        if(err) return res.status(404).send(err)
        res.status(200).send(doc)
    })
})
//POST
app.post('/api/add_book',(req,res)=>{
    book = new Book(req.body)
    book.save((err,doc)=>{
        if(err) return res.status(404).send(err)
        res.json({
            success:true,
            bookId:doc._id
        })
    })
})

//DELETE
app.delete('/api/delete_book',(req,res)=>{
    id = req.query._id
    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(404).send(err)
        res.status(200).send(true)
    })
})

//UPDATE
app.post('/api/update_book',(req,res)=>{
    id = req.query._id
    Book.findByIdAndUpdate(id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(404).send(err)
        res.status(200).json({
            success:true,
            doc
        })
    })
})

// REGISTER USER
app.post("/api/register",(req,res)=>{
    const user = new User(req.body)
    user.save((err,doc)=>{
        console.log(err)
        if(err) return res.json({message:'This email is already taken by another account'})
        res.json({
            success:true,
        })
    })
})


//LOGIN USER

app.post('/api/login',(req,res)=>{
    User.findOne({"email":req.body.email},(err,user)=>{
        if(err) return res.status(400).send(err)
        if(!user) return res.json({isAuth:false,message:"User not found"})
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err) return res.json({isAuth:false})
            if(!isMatch) return res.json({isAuth:false,message:'Password incorrect'})
            user.generateToken((err,user)=>{
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id
                })
            })
            
        })
    })
})
//lOGOUT USER
app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken((err,user)=>{
        if(err) return res.send(err)
        res.status(200).json({
            isAuth:false,
            success:true
        })
    })
})
// Authentification
app.get('/api/auth',auth,(req,res)=>{
    const user = req.user
    res.json({
        isAuth:true,
        id:user._id,
        name:user.name,
        lastname:user.lastname,
        email:user.email
    })
})
// Get Reviewer
app.get('/api/get_book_with_reviewer',(req,res)=>{
    id = req.query.id
    Book.findById(id,(err,book)=>{
        if(err) return res.send(err)
        User.findById(book.OwnerId,(err,user)=>{
            if(err) return res.status(400).send(err)
            res.json({
                book,
                user:{
                    name:user.name,
                    lastname:user.lastname
                }
            })
        })
    })
})

// LISTEN TO THE PORT
const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

import axios from 'axios'



//------------------------Book---------------------------------
export function getBooks(
    limit=10,
    skip=0,
    order='asc',
    list=''
){
    const request =axios(`/api/get_books?limit=${limit}&skip=${skip}&order=${order}`)
                    .then((response)=>{
                        if(list){
                            return [...list,...response.data]
                        }
                        else{
                            return response.data
                        }
                    }) 
    return {
        type:'GET_BOOKS',
        payload:request
    }
}

export function getBookWithReviewer(id){
    const request = axios(`/api/get_book_with_reviewer?id=${id}`)
                    .then(response=>{
                        return response.data
                    })
    return {
        type:'GET_BOOK_W_REVIEWER',
        payload:request

    }
    
    
}


export function clearBookWithReviewer(){
    return {
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:null
    }
}


export function clearPostBook(){
    return {
        type:'CLEAR_POST_BOOK',
        payload:null
    }
}
//------------------------User---------------------------------

export function loginUser(data){
    const request = axios.post('/api/login',data)
                    .then(response=> {
                        return response.data
                    })
    
    return{
        type:'LOGIN_USER',
        payload:request
    }
}


export function AuthUser(){
    const request = axios.get('/api/auth')
                    .then(response=> response.data)


    return{
        type:'AUTH_USER',
        payload:request
    }
}

export function postReview(book){
    const request = axios.post('/api/add_book',book)
                    .then((response)=>{
                        return response.data
                    })
    return{
        type:'POST_BOOK',
        payload:request
    }
}

export function registerUser(user){

    const request = axios.post('/api/register',user)
                    .then((response)=> {
                        return response.data
                    })
    
    return {
        type :'REGISTER_USER',
        payload:request
    }
}


export function logout(){
    const request = axios.get('/api/logout')
                    .then( response => response.data)
    return {
        type:'LOGOUT',
        payload:request
    }

}
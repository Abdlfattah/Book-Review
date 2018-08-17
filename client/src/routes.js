import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Import component layout
import Layout from './HOC/layout'

// Import component for routes
import Home from './components/home/home'
import Book from './components/book/book'
import Login from './components/login/login'
import Admin from './components/admin/admin'
import GetReviews from './components/Reviews/getReviews/get_reviews'
import AddReview from './components/Reviews/addReview/Add_review'
import Logout from './components/logout/logout'
import RegisterUser from './components/register/register'

// Import a function to restrict routes
import auth from './HOC/auth'
export default class Routes extends Component {
    render() {
        return (

            <Layout>
                <Route path='/' exact  component={auth(Home,null)}/>
                <Route path='/book/:id' exact  component={auth(Book,null)}/>
                <Route path='/login' exact  component={auth(Login,false)}/>
                <Route path='/user/admin' exact  component={auth(Admin,true)}/>
                <Route path='/user/user-reviews' exact  component={auth(GetReviews,true)}/>
                <Route path='/user/add-review' exact  component={auth(AddReview,true)}/>
                <Route path='/user/logout' exact  component={auth(Logout,true)}/>
                <Route path='/user/register' exact  component={auth(RegisterUser,false)}/>
            </Layout>
        )
    }
}

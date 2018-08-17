import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
import LoginUI from './login_ui'
class Login extends Component {

    state ={
        errorMessage:''
    }

    componentWillReceiveProps = (nextProps) =>{
        console.log(nextProps)
        if(nextProps.user.login.isAuth){
            this.props.history.push('/user/admin')
        }
        else{
            this.setState({
                errorMessage:nextProps.user.login.message
            })
        }
    }

    handleForm = data =>this.props.dispatch(loginUser(data))

    clearError = () =>{
        this.setState({
            errorMessage:''
        })
    }

    render() {
        return (
            <LoginUI handleForm = {this.handleForm} 
                     clearError  = {this.clearError}
                     {...this.state}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)

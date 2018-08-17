import React, { Component } from 'react';
import RegisterUI from './register_ui'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/index'
class AddAdmin extends Component {
    state={
        success:'',
        messageText:''
    }
    handleSubmit = data =>{
        console.log(data)
        this.props.dispatch(registerUser({
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            password:data.password
        }))
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.user.register.success){
            this.setState({
                success:true,
                messageText:'You are successfully registered'
            })
        }
        else{
            this.setState({
                success:false,
                messageText:nextProps.user.register.message
            })
        }
    }
    
    clearMessage = () =>{
        this.setState({
            success:'',
            messageText:''
        })
    }
    render() {
        return (
            <RegisterUI 
                handleForm={this.handleSubmit}
                clearMessage={this.clearMessage}
                {...this.state}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(AddAdmin);
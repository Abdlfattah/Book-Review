import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions'
import { Header, Icon } from 'semantic-ui-react'
class Logout extends Component {

    componentWillMount = () =>{
        this.props.dispatch(logout())
    }

    componentWillReceiveProps = (nextProps) =>{
        console.log(nextProps)
        if(nextProps.user.logout.success){
            setTimeout(()=>{
                this.props.history.push('/')
            },2000)
        }
    }
    render() {
        return (
            <div style={{'margin':'auto','width':'200px','textAlign':'center'}}>
                <Header as='h2' icon>
                    <Icon name='bullhorn' />
                    See you later...
                </Header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Logout);
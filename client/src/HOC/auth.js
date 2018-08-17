import React from 'react'
import { connect } from 'react-redux'
import { AuthUser } from '../actions'
import { Dimmer, Loader } from 'semantic-ui-react'
export default function auth (ComposedComp,reload){
    
    class AuthComponent extends React.Component{
        state = {
            loading:true
        }
        componentWillMount = () =>{
            this.props.dispatch(AuthUser())
        }
        componentWillReceiveProps = (nextProps) =>{
            this.setState({loading:false})
            if(reload === false){
                if(nextProps.user.login.isAuth){
                    nextProps.history.push('/user/admin')
                }} 
            if(reload){
                if(!nextProps.user.login.isAuth){
                    nextProps.history.push('/')
                }
            }           
        }
        render(){
            if(this.state.loading){
                return <Dimmer active>
                            <Loader />
                        </Dimmer>
            }
            return(
                <ComposedComp {...this.props}/>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(AuthComponent)
}
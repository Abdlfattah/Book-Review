import React from 'react'
import { Button, Menu, Sidebar, Icon  } from 'semantic-ui-react'
import NavItems from './nav_items'
import { connect } from 'react-redux'
import { AuthUser } from '../../actions'
class SideNavComp extends React.Component {
  state = { 
    visible: false 
  }

  componentWillMount = ()=> {
    this.props.dispatch(AuthUser())
  }

  handleButtonClick = () => this.setState({ 
    visible: !this.state.visible 
  })

  handleSidebarHide = () => this.setState({ 
    visible: false 
  })
  render () {
    return (
      <div 
        
      >
        <Button icon ='bars' 
                size='huge'  
                compact={true}
                circular={false}
                style={{'borderRadius': '0'}}
                onClick={this.handleButtonClick}
        />
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.visible}
          width='thin'
          
        >
          {this.props.user.login?
            <NavItems handleClick={this.handleButtonClick}
                    isAuth={this.props.user.login.isAuth}
            />
            :null
        }
        </Sidebar>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(SideNavComp)


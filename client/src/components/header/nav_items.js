import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

const NavItems = (props) => {
    const items =[
        {
            type:'navItem',
            text:'Home',
            link:'/',
            icon:'home',
            restricted:false
        },
        {
            type:'navItem',
            text:'Login',
            link:'/login',
            icon:'arrow alternate circle right outline',
            restricted:false,
            excluded:true
        },
        {
            type:'navItem',
            text:'Logout',
            link:'/user/logout',
            icon:'sign out alternate',
            restricted:true
        },
        {
            type:'navItem',
            text:'Add review',
            link:'/user/add-review',
            icon:'edit',
            restricted:true
        },
        {
            type:'navItem',
            text:'Register',
            link:'/user/register',
            icon:'user plus',
            restricted:false,
            excluded:true
        },
        {
            type:'navItem',
            text:'My Profil',
            link:'/user/admin',
            icon:'address card',
            restricted:true
        },
        {
            type:'navItem',
            text:'My reviews',
            link:'/user/user-reviews',
            icon:'write',
            restricted:true
        }

    ]

    const handleClick = () =>{
        props.handleClick()
    }
    const element = (item,i) =>(
            <Link key={i} to={item.link} onClick={()=>handleClick()}>
                <Menu.Item >
                    <Icon name={item.icon}/>    
                        {item.text}
                </Menu.Item>
            </Link>
    )
    const RenderItems = () =>(
        items.map((item,i)=>{
            if(props.isAuth&&!item.excluded){
                return element(item,i)
            }
            if(!props.isAuth&&!item.restricted){
                return element(item,i)
            }
        })
    )
    return (
        
       <div>
            {RenderItems()}
       </div>

    );
};



export default NavItems;
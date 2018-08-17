import React from 'react';
import HeaderComp from '../components/header/header'

const Layout = (props) => {
    return (
        <div >
            <HeaderComp/>
            <div style={{'margin':'10px'}}>
                 {props.children}
            </div>
        </div>
    );
};

export default Layout;
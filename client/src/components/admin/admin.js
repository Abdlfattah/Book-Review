import React from 'react';
import { Card, Image } from 'semantic-ui-react'
const Admin = ({user}) => {
    return (
        user.login?
        <div style={{'margin':'auto','width':'300px'}}>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                <Card.Header>{user.login.name} {user.login.lastname}</Card.Header>
                <Card.Meta>
                    <span>{user.login.email}</span>
                </Card.Meta>
                </Card.Content>
            </Card>
        </div>
        :<div></div>
    );
};

export default Admin;
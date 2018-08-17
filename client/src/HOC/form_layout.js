import React from 'react';
import { Header, Message, Icon} from 'semantic-ui-react'
const FormLayout = (props) => {
    return (
        <div style={{'width':'400px',
                    'border':'1px solid #e8e8e8',
                    'margin':"auto",
                    'padding':'15px',
                    'backgroundColor':'#fcfcfc'
        }}>
            <Header textAlign='center'
                    size='large'
                    color='grey'
            >
                {props.title}
            </Header>
            {props.message.text?
                <Message {...props.message.type}>
                    <Icon  name={props.message.icon}/>
                    {props.message.text}
                </Message>
                :null
             }
            {props.children}
        </div>
    );
};

export default FormLayout;
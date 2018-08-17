import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react'
import { validate } from './register_form_config'
import FormLayout from '../../HOC/form_layout'
import {renderInputField} from '../../widget/render_field'
const RegisterUI = (props) => {
    const clearMessage = () =>{
        if(props.message){
            props.clearMessage()
        }
    }
    return (
        <FormLayout title='Register here'
                    message={{
                        text:props.messageText,
                        icon:props.success?'check':'warning sign',
                        type:{
                            success:props.success,
                            warning:!props.success
                        }
                    }}
        >
            <Form onSubmit={props.handleSubmit(e=>props.handleForm(e))}>
                <Field 
                    name='name' 
                    component={renderInputField}
                    icon='user'
                    placeholder='Enter your name'
                    type="text"
                    onFocus={()=>clearMessage()}
                />
                <Field 
                    name='lastname' 
                    component={renderInputField}
                    icon='user'
                    placeholder='Enter your lastname'
                    type="text"
                    onFocus={()=>clearMessage()}
                />              
                <Field 
                    name='email' 
                    component={renderInputField}
                    placeholder='Enter your Email'
                    type="email"
                    onFocus={()=>clearMessage()}
                />

                <Field 
                    name='password' 
                    component={renderInputField}
                    icon='lock'
                    placeholder='Enter your password'
                    type="password"
                    onFocus={()=>clearMessage()}
                />
                <Field 
                    name='passwordConfirm' 
                    component={renderInputField}
                    icon='lock'
                    placeholder='Re-enter your password'
                    type="password"
                    onFocus={()=>clearMessage()}
                />
                <div style={{'margin':'auto'}}>
                    <Button  fluid primary 
                                type='submit'
                                loading={this.submitting}
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </FormLayout>
    );
};
export default reduxForm({
    form:'register',
    validate
})(RegisterUI)
import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button, Form} from 'semantic-ui-react'
import FormLayout from '../../HOC/form_layout'
import {renderInputField} from '../../widget/render_field'
import { validate } from './login_form_validation'
const LoginUI = (props) => {
    const clearErrMessage = () =>{
        if(props.errorMessage){
            props.clearError()
        }
    }
    return (
        <FormLayout title='Log in here' 
                    message={{
                        text:props.errorMessage,
                        icon:'warning sign'
                    }}>
            <Form onSubmit={props.handleSubmit(data=>props.handleForm(data))}>
                <Field 
                    name='email' 
                    component={renderInputField}
                    icon='mail'
                    iconPosition='left'
                    placeholder='Enter your Email'
                    type="email"
                    onFocus={()=>clearErrMessage()}
                />
                <Field 
                    name='password' 
                    component={renderInputField}
                    icon='lock'
                    iconPosition='left'
                    placeholder='Enter your password'
                    type="password"
                    onFocus={()=>clearErrMessage()}
                />
                <div style={{'margin':'auto'}}>
                    <Button   fluid primary 
                              type='submit'
                              loading={this.submitting}
                    >
                        Submit
                    </Button>
                </div>
            </Form>
                
            </FormLayout>
        
    )
}

export default reduxForm({
    form:'login',
    validate
})(LoginUI)
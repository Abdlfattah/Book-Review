import React from 'react'
import { Button, Form, Rating } from 'semantic-ui-react'
import FormLayout from '../../../HOC/form_layout'
import { Field, reduxForm } from 'redux-form';
import { validate } from './add_review_form_config'
import { renderInputField , renderTextAreaField } from '../../../widget/render_field'
const AddReviewUI = (props) => {

    return (
        <FormLayout     title='Post a review'
                        message={{
                            text:props.messageText,
                            icon:props.success?'check':'warning sign',
                            type:{
                                success:props.success,
                                warning:!props.success
                            }
                        }}
        >
                <Form onSubmit={props.handleSubmit(data=>props.handleForm(data))}>                    
                        <Field  component={renderInputField} 
                                name='name'
                                label='Name' 
                                placeholder='Enter the name of the book'
                                type='text'
                        />
                        <Field  component={renderInputField} 
                                name='author'
                                label='Author' 
                                placeholder='Enter the name of the author'
                                type='text'
                        />                 
                        <Field  component={renderInputField} 
                                name='price'
                                label='Price' 
                                type='number' 
                                placeholder='Enter the price'
                        />
                        <Field  component={renderInputField} 
                                name='page'
                                label='Page' 
                                type='number' 
                                placeholder='Enter the number of pages'
                        />
                        <Rating maxRating={5}
                                rating={props.rating}
                                onRate={(e,data)=>props.handleRatingState(e,data)}
                                name='rating'
                                clearable
                        />
                    <Field  component={renderTextAreaField} 
                            name='review'
                            placeholder='Write your review about the book...' 

                    />
                    <Form.Field control={Button}>
                        Submit
                    </Form.Field>
                </Form>
        </FormLayout>
    )
}

export default reduxForm({
    validate,
    form:'post_book'
})
(AddReviewUI)
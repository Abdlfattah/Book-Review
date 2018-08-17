import React from 'react'
import { Icon, Input, Label} from 'semantic-ui-react'
export function renderInputField({
    input,
    placeholder,
    type,
    icon,
    label,
    meta: { touched, error, warning }
  }){
    return( 
            <div style={{'marginBottom':'7px'}}>
                <Input 
                    iconPosition='left'
                    fluid
                    error={touched&&error?true:false}
                    placeholder={placeholder} 
                >
                    {label&&!icon?
                        <Label tag >
                            {label}
                        </Label>
                        :
                        <Icon name={icon}
                        color={touched&&error?'red':'blue'}
                        />
                    }
                    <input  {...input}      
                    type={type} 
                    />
                </Input>
                <div style={{'textAlign':'center',
                            'color':'red',
                            'fontWeight':'400'}}>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
    )}
export function renderTextAreaField({
    input,
    placeholder,
    meta: { touched, error, warning }
    }){

    return( 
            <div style={{'marginBottom':'7px'}}>
                <textarea  {...input} 
                            placeholder={placeholder} 
                />
                <div style={{'textAlign':'center',
                            'color':'red',
                            'fontWeight':'400'}}>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
    )}

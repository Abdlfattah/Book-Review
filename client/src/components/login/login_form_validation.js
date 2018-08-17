const validate = values => {
    const errors = {}

    //email validation
    if (!values.email) {
      errors.email = 'The email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    //password validation
    if (!values.password) {
      errors.password = 'The password is required'
    } 
    
    return errors
  }

export {
    validate
}
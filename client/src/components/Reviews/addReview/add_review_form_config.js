const validate = values => {
    const errors = {}

    
    if (!values.name) {
      errors.name = 'The name is required'
    } 
    
    if (!values.author) {
      errors.author = 'The author is required'
    }

    if (!values.price) {
        errors.price = 'The price is required'
    }

    if (!values.page) {
        errors.page = 'Number of pages is required'
    }

    if (!values.review) {
        errors.review = 'The review is required'
    }

    
    return errors
  }

export {
    validate
}
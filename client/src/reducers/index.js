import { combineReducers  } from 'redux'
import user from './reducer_user'
import books from './reducer_book'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    books,
    user,
    form : formReducer

})

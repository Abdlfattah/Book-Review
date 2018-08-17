export default function(state={},action){
    switch (action.type) {
        case 'GET_BOOKS':
            return {...state,list:action.payload}
        case 'GET_BOOK_W_REVIEWER':
            return {...state,
                    book:action.payload.book,
                    reviewer:action.payload.user
                }
        case 'CLEAR_BOOK_W_REVIEWER':
        return {...state
                
            }
        case 'POST_BOOK':
            return {
                ...state,
                book:action.payload
            }
        case 'CLEAR_POST_BOOK':
            return {
                ...state
            }
        default:
            return state
    }
}
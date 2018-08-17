export default function(state={},action){
    switch (action.type) {
        case "LOGIN_USER": 
            return {...state,login:action.payload}
        case "AUTH_USER":
            return {...state,login:action.payload}
        case 'REGISTER_USER':
            return {...state,register:action.payload}
        case 'LOGOUT' :
            return {...state,logout:action.payload}
        default:
            return state
    }
}
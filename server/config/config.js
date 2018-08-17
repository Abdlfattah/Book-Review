const config = {
    production : {
        SECRET : process.env.SECRET,
        DATABASE : process.env.MONGODB_URI
    },
    default : {
        SECRET : 'mySecretPassword',
        DATABASE : "mongodb://localhost:27017/book_review"
    }
}

exports.get = function get (env){
    return config[env] || config.default
}
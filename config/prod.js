//jake-prod EKEoZY3DeEKEoZY3DeMYb0hCUMYb0hCU
//mongodb+srv://jake-prod:EKEoZY3DeEKEoZY3DeMYb0hCUMYb0hCU@cluster0-8w1e2.mongodb.net/test?retryWrites=true&w=majority

//clientID 831009016007-u28gbbmr792gu20g6v1p5jfu5g9ccqtf.apps.googleusercontent.com
//client secret ZRACgpKIT3O0Y_LzETDWfQDE

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
};
const bcrypt  = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

//https:bcrypt-generator.com

const users = [{
    _id: 1,
    username: 'adm',
    password:'$2a$12$Xi9op7NP.ISoyDxzkenyDe6yiIdxcEuymF8LH3WNyTHV74pO/P4i.',
    email: 'deltaacre@gmail.com'
}]

function findUser(username){
    return users.find(item => item.username === username);
}

function findUserById(id) {
    return users.find(item => item.id === id);
}

module.exports = (passport) => {

//Salva um cookie no front e uma sessão no back
passport.serializeUser((user, done)=>{
    done(null, users._id);
});

//Faz o caminho inverso do serializeUser
passport.deserializeUser((id, done)=>{
try {
    const user = findUserById(id);
    done(null, user);
} catch (error) {
    console.log(error);
    return done(error, null);
}

})



}
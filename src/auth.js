const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

//bcryptjs -> Criptografia de mão única (hash)
// https://bcrypt-generator.com     -> gerador automático de hash

const users = [{
    _id: 1,
    username: 'adm',
    password: '$2a$12$3vylNkG25BwCGo2SLYl2m.dX6/A8VXSy5cy37Ec0QplP8AcF9SXMC', //123
    email: 'adm@gmail.com'
}]

function findUser(username) {
    return username.find(item => item.username === username);
}

function findUserById(id) {
    return username.find(item => item.id === id);
}

module.exports = ()=>{
    // Uma vez que autentica, salva um cookie no front e uma sessão no back
    passport.serializeUser((user, done)=>{
        done(null, user._id);
    });

    // Recuperar os dados gravados do user a partir do id do usuário
    passport.deserializeUser((id, done)=>{
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (error) {
            console.log(error);
            return done(error, null);
        }
    })

    passport.use(new LocalStategy({
        username: 'username',
        password: 'password'
    },(username, password, done)=>{
        try {
            const user = findUser(username);
            if(!user) return done(null, false);
            const isValid = bcrypt.compareSync(password, user.password);
            if(!isValid) return done(null, false);
            return done(null, user);

        } catch (error) {
            console.log(error);
            return done(error, false);
        }
    }))
}
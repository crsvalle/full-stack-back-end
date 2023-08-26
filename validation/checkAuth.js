const {check} = require('express-validator')
const db = require('../db/dbConfig')
const {compare} = require('bcryptjs')

const isUsername = value => {
    return !value.includes('@')
}
const username = check('username').custom(isUsername).withMessage('Username should not be an email')

const password = check('password').isLength({min:6, max:15}).withMessage('Password has to be between 6 and 15 characters.')


const usernameExist = check('username').custom(async (value)  =>{
    const result = await db.query('SELECT * from users WHERE username = $1', [value,
    ])

    if (result.length){
        throw new Error('Username is taken')
    }
})

const loginFieldsCheck = check('username').custom(async(value, { req }) => {
    const user = await db.query('SELECT * from users WHERE username = $1', [value])
    if (!user.length){
        throw new Error ('Username does not exist')
    }

    const validPassword = await compare(req.body.password, user[0].password)

    if (!validPassword){
        throw new Error ('Wrong password')
    }

    req.user = user[0]
})

module.exports = {
    registerValidation: [username, password, usernameExist],
    loginValidation: [loginFieldsCheck]
}
const express = require('express')
const router = express.Router()

//router
const home = require('./home/home')
const registor = require('./user/registor')
const login = require('./user/login')
const forget = require('./user/forget')

// meddlewares
const auth = require('../meddlewares/auth')
router 
    // home page
    .get('/home', auth, home)
    // singin
    .get('/user/singin',registor.GET)
    .post('/user/singin', registor.POST)
    // login
    .get('/user/login',login.GET)
    .post('/user/login', login.POST)
    //forget
    .get('/user/forgetpassword',forget.GET)
    .post('/user/forgetpassword',forget.POST)

module.exports = router
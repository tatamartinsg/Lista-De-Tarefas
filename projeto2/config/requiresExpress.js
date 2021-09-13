const express = require("express")
const consign = require('consign')
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars")
const session = require('express-session')
const flash = require('connect-flash')
// const handlebars = require("express-handlebars")

module.exports = () => {
    const app = express()
    //sessão
    app.use(session({
        secret: 'secret-key',
        resave: false,
        saveUninitialized: false
    }))
    app.use(flash())
    app.use((req,res,next)=>{
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        next ()
    })
    //'pegar' o js do front e o css
    app.use(express.static('public'));
    //configurar o handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    //configurar o body parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())


    consign() //serve para interligar as rotas que estao em um arquivo js separado!!
        .include('controllers')
        .into(app)
    return app
}
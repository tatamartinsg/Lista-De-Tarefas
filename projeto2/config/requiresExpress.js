const express = require("express")
const consign = require('consign')
const bodyParser = require('body-parser')
const handlebars = require("express-handlebars")
// const handlebars = require("express-handlebars")

module.exports = () => {
    const app = express()
    app.use(express.static('public'));

    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())


    consign() //serve para interligar as rotas que estao em um arquivo js separado!!
        .include('controllers')
        .into(app)
    return app
}
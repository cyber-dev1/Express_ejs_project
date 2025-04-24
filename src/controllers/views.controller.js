const path = require("path")
class viewsController {
    constructor(){
        this.MAIN = (req, res) => res.render("index", {page : "Bosh sahifa", gUrl : "/css/index.css"}) ;
        this.LOGIN = (req, res) => res.render("login", {page : "Login sahifasi"}) ;
        this.REGISTER = (req, res) => res.render("register", {page : "Register sahifasi"}) ;
    }
}

module.exports = new viewsController() ;
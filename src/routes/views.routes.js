const express = require("express") ;
const viewsController = require("../controllers/views.controller");

const viewsRouter = express.Router() ;

viewsRouter.get("/", viewsController.MAIN) ;
viewsRouter.get("/login", viewsController.LOGIN) ;
viewsRouter.get("/register", viewsController.REGISTER) ;

module.exports = {viewsRouter} ;
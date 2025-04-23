const express = require("express") ;
const { userRouter } = require("./user.routes");

const mainRoutes = express.Router() ;

mainRoutes.use("/", userRouter); 

module.exports = {mainRoutes}
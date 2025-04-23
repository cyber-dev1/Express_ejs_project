const express = require("express") ;
const userController = require("../controllers/user.controller");

const userRouter = express.Router() ;

userRouter.route("/users")
.get(userController.GET_USERS)
.post(userController.POST_USER) 
.put(userController.PUT_USER) 
.delete(userController.DELETE_USER)

userRouter.route('/users/:userId').get(userController.GET_USER)

module.exports = {userRouter}
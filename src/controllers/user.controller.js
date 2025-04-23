class userController {
    constructor() {
        this.GET_USERS = (_, res) => res.send("userlar helllo");
        this.POST_USER = (_, res) => res.send("post ishladi");
        this.DELETE_USER = (_, res) => res.send("delete ishlad");
        this.PUT_USER = (_, res) => res.send("put ishladi");
        this.GET_USER = (_, res) => res.send("user id keldi")
    }
};

module.exports = new userController();
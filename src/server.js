const express = require("express");
const path = require('path');
const layout = require("express-ejs-layouts")
const { mainRoutes } = require("./routes/main.routes");
const { viewsRouter } = require("./routes/views.routes");
const { config } = require('dotenv');
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(layout);
app.set("layout", "layout/main")
app.set("view engine", "ejs") ;
app.set("views", path.join(process.cwd(), "src", "views"))

app.use("/api", mainRoutes);
app.use(viewsRouter);
app.use((req, res) => {
    let url = req.url.trim().toLowerCase() ;
    let method = req.method.trim().toUpperCase() ;

    return res.render("errPage", {url, method, page : "Error page"})
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})

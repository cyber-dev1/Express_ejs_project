const express = require("express");
const path = require('path');
const { mainRoutes } = require("./routes/main.routes");
const { viewsRouter } = require("./routes/views.routes");
const { config } = require('dotenv');
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine", "ejs") ;
app.set("views", path.join(process.cwd(), "src", "views"))

app.use("/api", mainRoutes);
app.use(viewsRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})

import express from "express";
import User from "../models/User.js";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
// import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();


// rootRouter.use("/", clientRouter);

rootRouter.use("/", async (req, res) => {
    let users = null
    try {
        users = await User.query()
    } catch(error){
        console.log("DB QUERY ERROR from ya boi")
        console.log(error)
    }
    // const users = [{email: "yo@yo.com"}]
    res.render("index", { users })
})

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here

export default rootRouter;

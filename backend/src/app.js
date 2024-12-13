import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Express
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// import userRouter from "./routes/user.routes.js";
// import productRoute from "./routes/product.routes.js"
// import postRoute from "./routes/post.routes.js"

// // routes decclaration
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/products", productRoute);
// app.use("/api/v1/post", postRoute);

//****************************************************8 */
// //routes import


export { app };

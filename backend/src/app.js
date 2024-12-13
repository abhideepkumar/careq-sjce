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

<<<<<<< HEAD
// import userRouter from "./routes/user.routes.js";
// import productRoute from "./routes/product.routes.js"
// import postRoute from "./routes/post.routes.js"

// // routes decclaration
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/products", productRoute);
// app.use("/api/v1/post", postRoute);

//****************************************************8 */
// //routes import

=======
//routes import
import bedRouter from "./routes/bedRoutes.js";
import inventoryRouter from "./routes/inventoryRoutes.js";
import departmentRoutes from './routes/department.routes.js';
import doctorRoutes from './routes/doctor.routes.js';

// routes decclaration
app.use("/api/v1/beds", bedRouter);
app.use("/api/v1/inventory", inventoryRouter);
app.use('/api/v1/departments', departmentRoutes);
app.use('/api/v1/doctors', doctorRoutes);
>>>>>>> 29dc20c9baf67099d025835ef910b0611e5855cb

export { app };

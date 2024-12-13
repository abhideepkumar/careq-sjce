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

export { app };

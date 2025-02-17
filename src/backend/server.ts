import express from "express";
import dotenv from "dotenv";
import path from "path";
import sequelize from "./config/database";
import portfolioRoutes from "./routes/portofolioRoute";
import contactRoute from "./routes/contactRoute";
import upload from "./middleware/multerconfig";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.json());

app.use("/api/contact", contactRoute());
app.use("/api/portofolio", portfolioRoutes)

sequelize.sync({ force: false }).then(() => {
  console.log("Database Synchronized");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

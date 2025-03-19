import express from "express";
import dotenv from "dotenv";
import path from "path";
import sequelize from "./config/database";
import portfolioRoutes from "./routes/portofolioRoute";
import contactRoute from "./routes/contactRoute";
import contactHomeRoute from './routes/contactHomeRoute'
import blogs from './routes/blogRoute'
import cors from 'cors';
import JourneyRoutes from "./routes/JourneyRoute";


dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());

app.use("/api/contact", contactRoute());
app.use("/api/portofolio", portfolioRoutes);
app.use("/api/contacthome", contactHomeRoute());
app.use("/api/blogs", blogs);
// ada endpo
app.use("/api/journey", JourneyRoutes);
sequelize.sync({ force: false }).then(() => {
  console.log("Database Synchronized");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import contactRoute from "./routes/contactRoute";
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contact", contactRoute());

sequelize.sync({ force: false }).then(() => {
  console.log("Database Synchronized");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

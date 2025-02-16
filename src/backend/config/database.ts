import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "db_portofolio",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database Connect"))
  .catch((err) => console.error("Database connection Error", err));

export default sequelize

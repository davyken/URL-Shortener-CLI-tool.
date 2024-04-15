import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
import { program } from 'commander';


const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  password: `${process.env.DB_PASSWORD}`,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,

  });

sequelize.authenticate()
  .then(() => {
   console.log('Database connection establishement successful.');
    program.parse(process.argv);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;


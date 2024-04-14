import { Sequilize } from 'sequilize';
import dotenv from 'dotenv';
dotenv.config();
import { program } from 'commander';


const sequilize = new Sequilize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
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

export default sequilize;


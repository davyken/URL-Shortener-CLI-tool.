import { pool } from './DB.js';
import { config } from 'dotenv';
config();


const pool = new pool(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
  }
);

const Url = pool.define('Url', {
  long_url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  short_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
}, {
  tableName: 'urls',
  timestamps: false,
});

export default Url;
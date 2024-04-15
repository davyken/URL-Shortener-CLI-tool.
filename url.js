import { Sequelize, DataTypes } from 'sequelize';
import { config } from 'dotenv';
config();


const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
  }
);

const Url = sequelize.define('Url', {
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
import { Sequelize, DataTypes } from 'sequelize';
import { config } from 'dotenv';
config();


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
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const User = sequelize.define('user', {
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
});

User.sync();

export default User;

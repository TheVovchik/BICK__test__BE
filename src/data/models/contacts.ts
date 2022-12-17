'use strict';

import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const Contacts = sequelize.define('Contact',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emails: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  numbers: {
    type: DataTypes.JSON,
    allowNull: false,
  }},{
  tableName: 'Contacts',
});

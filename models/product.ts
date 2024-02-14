'use strict';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../src/utils/db';
import Phone from './phone';
import Accessory from './accessory';
import Tablet from './tablet';

interface ProductAttributes {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  declare id: number;
  declare category: string;
  declare itemId: string;
  declare name: string;
  declare fullPrice: number;
  declare price: number;
  declare screen: string;
  declare capacity: string;
  declare color: string;
  declare ram: string;
  declare year: number;
  declare image: string;
  declare createdAt: string;
  declare updatedAt: string;
}

Product.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    itemId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    fullPrice: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    screen: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    capacity: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ram: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
  },
  { sequelize, modelName: 'Product' }
);

Product.hasOne(Phone, { foreignKey: 'id', as: 'phone' });
Product.hasOne(Accessory, { foreignKey: 'id', as: 'accessory' });
Product.hasOne(Tablet, { foreignKey: 'id', as: 'tablet' });

export default Product;

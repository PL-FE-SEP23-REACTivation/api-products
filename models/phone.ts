/* eslint-disable max-len */
'use strict';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../src/utils/db';
import Product from './product';

type Descriptions = {
  title: string;
  text: string[];
};

interface PhoneAttributes {
  id: string;
  createdAt: string;
  updatedAt: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Descriptions[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

class Phone extends Model<PhoneAttributes> implements PhoneAttributes {
  declare createdAt: string;
  declare updatedAt: string;
  declare id: string;
  declare namespaceId: string;
  declare name: string;
  declare capacityAvailable: string[];
  declare capacity: string;
  declare priceRegular: number;
  declare priceDiscount: number;
  declare colorsAvailable: string[];
  declare color: string;
  declare images: string[];
  declare description: Descriptions[];
  declare screen: string;
  declare resolution: string;
  declare processor: string;
  declare ram: string;
  declare camera: string;
  declare zoom: string;
  declare cell: string[];
}

Phone.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
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
    namespaceId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    capacityAvailable: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    capacity: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    priceRegular: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    priceDiscount: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    colorsAvailable: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    color: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    images: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    description: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    screen: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    resolution: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    processor: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ram: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    camera: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    zoom: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cell: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  { sequelize, modelName: 'Phone' }
);

Phone.hasOne(Product, { foreignKey: 'itemId', as: 'product'});
Product.belongsTo(Phone, { foreignKey: 'id', as: 'phone' });

export default Phone;

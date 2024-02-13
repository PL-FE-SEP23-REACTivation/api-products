'use strict';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../src/utils/db';

type Descriptions = {
  title: string;
  text: string;
};

interface AccessoryAttributes {
  id: string;
  createdAt: string;
  updatedAt: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorAvailable: string[];
  color: string;
  images: string[];
  description: Descriptions[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
}

// eslint-disable-next-line max-len
class Accesory extends Model<AccessoryAttributes> implements AccessoryAttributes {
  declare createdAt: string;
  declare updatedAt: string;
  declare id: string;
  declare namespaceId: string;
  declare name: string;
  declare capacityAvailable: string[];
  declare capacity: string;
  declare priceRegular: number;
  declare priceDiscount: number;
  declare colorAvailable: string[];
  declare color: string;
  declare images: string[];
  declare description: Descriptions[];
  declare screen: string;
  declare resolution: string;
  declare processor: string;
  declare ram: string;
  declare cell: string[];
}

Accesory.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
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
    colorAvailable: {
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
      type: DataTypes.ARRAY(DataTypes.JSON),
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
    cell: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  { sequelize, modelName: 'Accesory' }
);

export default Accesory;

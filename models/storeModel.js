'use strict'

function storeModel (sequelize, DataTypes) {
  const storeModel = sequelize.define(
    'store',
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.CHAR,
      location: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      reference: DataTypes.STRING,
      document: DataTypes.CHAR
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return storeModel
}
module.exports = storeModel

'use strict'

function itemModel (sequelize, DataTypes) {
  const itemModel = sequelize.define(
    'item',
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return itemModel
}
module.exports = itemModel

'use strict'

function orderModel (sequelize, DataTypes) {
  const orderModel = sequelize.define(
    'order',
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
      items: DataTypes.INTEGER,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return orderModel
}
module.exports = orderModel

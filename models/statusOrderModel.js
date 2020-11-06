'use strict'

function statusOrderModel (sequelize, DataTypes) {
  const statusOrderModel = sequelize.define(
    'statusOrder',
    {
      order_id: DataTypes.INTEGER,
      descripcion: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return statusOrderModel
}
module.exports = statusOrderModel

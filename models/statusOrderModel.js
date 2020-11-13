'use strict'

function statusOrderModel (sequalize, DataTypes) {
  const statusOrderModel = sequalize.define(
    'statusOrder',
    {
      order_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      status: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return statusOrderModel
}
module.exports = statusOrderModel

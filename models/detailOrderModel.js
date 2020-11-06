'use strict'

function detailOrderModel (sequelize, DataTypes) {
  const detailOrderModel = sequelize.define(
    'detailOrder',
    {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return detailOrderModel
}
module.exports = detailOrderModel

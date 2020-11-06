'use strict'

function detail_orderModel (sequelize, DataTypes) {
  const detail_orderModel = sequelize.define(
    'detail_order',
    {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      timestamps_modified: DataTypes.DATE,
      timestamps_created: DataTypes.DATE

    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  return detail_orderModel
}

module.exports = detail_orderModel

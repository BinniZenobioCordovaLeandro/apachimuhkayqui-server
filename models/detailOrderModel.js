'use strict'

function detailOrderModel (sequelize, DataTypes) {
  const detailOrderModel = sequelize.define(
    'detail_order',
    {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      items: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  detailOrderModel.associate = (models) => {
    detailOrderModel.belongsTo(models.Lpn, {
      foreignKey: 'lpn_id'
    })
    detailOrderModel.belongsTo(models.Order, {
      foreignKey: 'order_id'
    })
  }
  return detailOrderModel
}

module.exports = detailOrderModel

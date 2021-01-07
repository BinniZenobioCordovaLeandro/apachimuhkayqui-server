'use strict'

function detailOrderModel (sequelize, DataTypes) {
  const detailOrderModel = sequelize.define(
    'detailOrder', {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    }, {
      timestamps: false,
      freezeTableName: false
    }
  )
  detailOrderModel.associate = (models) => {
    detailOrderModel.belongsTo(models.Order, {
      foreignKey: 'order_id'
    })
    detailOrderModel.belongsTo(models.Lpn, {
      foreignKey: 'order_id'
    })
  }
  return detailOrderModel
}

module.exports = detailOrderModel

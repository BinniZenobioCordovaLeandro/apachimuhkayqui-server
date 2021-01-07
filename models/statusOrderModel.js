'use strict'

function statusOrderModel (sequelize, DataTypes) {
  const statusOrderModel = sequelize.define(
    'statusOrder', {
      order_id: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    }, {
      timestamps: false,
      freezeTableName: false
    }
  )
  statusOrderModel.associate = (models) => {
    statusOrderModel.belongsTo(models.Order, {
      foreignKey: 'order_id'
    })
  }
  return statusOrderModel
}

module.exports = statusOrderModel

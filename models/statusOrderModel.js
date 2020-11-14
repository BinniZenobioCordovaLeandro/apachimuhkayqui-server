'use strict'

function statusOrderModel (sequelize, Datatypes) {
  const statusOrderModel = sequelize.define(
    'statusOrder', {
      order_id: Datatypes.INTEGER,
      description: Datatypes.INTEGER,
      status: Datatypes.INTEGER,
      timestamp_modified: Datatypes.DATE,
      timestamp_created: Datatypes.DATE
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

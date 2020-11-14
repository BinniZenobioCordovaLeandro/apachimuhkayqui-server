'use strict'

function detailOrderModel (sequelize, Datatypes) {
  const detailOrderModel = sequelize.define(
    'detailOrder', {
      order_id: Datatypes.INTEGER,
      lpn_id: Datatypes.INTEGER,
      timestamp_modified: Datatypes.DATE,
      timestamp_created: Datatypes.DATE
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

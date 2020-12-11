'use strict'

function detail_OrderModel (sequalize, DataTypes) {
  const detail_OrderModel = sequalize.define(
    'detail_Order',
    {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  detail_OrderModel.associate=(models)=>{
    detail_OrderModel.belongsTo(models.Lpn, {
      foreignKey: 'lpn_id'
    })
    detail_OrderModel.belongsTo(models.Order, {
      foreignKey: 'order_id'
    })
  }
  return detail_OrderModel
}
module.exports = detail_OrderModel

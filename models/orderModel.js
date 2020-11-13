'use strict'

function orderModel (sequalize, DataTypes) {
  const orderModel = sequalize.define(
    'order',
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.INTEGER,
      items: DataTypes.INTEGER,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  orderModel.associate = (models) => {
    orderModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return orderModel
}
module.exports = orderModel

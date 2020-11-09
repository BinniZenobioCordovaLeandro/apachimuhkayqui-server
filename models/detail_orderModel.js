'use strict'

function detail_orderModel (sequelize, DataTypes){
   const detail_orderModel =sequelize.define(
   'detail_order',
   {
    order_id: DataTypes.INTEGER,
    Ipn_id: DataTypes.INTEGER,
    expiration: DataTypes.INTEGER,
    timestamp_created: DataTypes.DATE
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   detail_orderModel.associate = (models) => {
      detail_modelModel.belongsTo(models.User,{
         ForeignKey:'user_id'
      })
   }
   return detail_orderModel
}
module.exports = detail_orderModel

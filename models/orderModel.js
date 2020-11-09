'use strict'

function orderModel (sequelize, DataTypes){
   const orderModel =sequelize.define(
   'order',
   {
        user_id: DataTypes.INTEGER,
        description: DataTypes.INTEGER,
        items: DataTypes.INTEGER,
        timestamp_created: DataTypes.DATE,
        timestamp_created: DataTypes.DATE  
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   return orderModel
}
module.exports = orderModel
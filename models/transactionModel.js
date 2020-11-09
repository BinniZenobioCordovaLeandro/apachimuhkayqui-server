'use strict'

 function transactionModel (sequelize, DataTypes){
     const transactionModel =sequelize.define(
         'transaction',
         {
             user_id: DataTypes.INTEGER,
             order_id: DataTypes.INTEGER,
             description: DataTypes.TEXT,
             value: DataTypes.DECIMAL,
             type: DataTypes.CHAR,
             timestamp_MODIFED:DataTypes.DATE, 
             timestamp_CREATED:DataTypes.DATE
         },
         {
            timestamp: false,
            freezeTableName: false   
         }
     )
     return transactionModel
        }
        module.exports = transactionModel
'use strict'

function itemModel (sequelize, DataTypes){
   const itemModel =sequelize.define(
   'item',
   {
        user_id: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        expiration: DataTypes.STRING,
        timestamp_created: DataTypes.DATE,
        timestamp_created: DataTypes.DATE
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   return itemModel
}
module.exports = itemModel


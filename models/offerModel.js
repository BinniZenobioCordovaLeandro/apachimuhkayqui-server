'use strict'

function offerModel (sequelize, DataTypes){
   const offerModel =sequelize.define(
   'offer',
   {
        user_id: DataTypes.INTEGER,
        timestamp_created: DataTypes.DATE,
        timestamp_created: DataTypes.DATE,
        porcentage: DataTypes.INTEGER
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   return offerModel
}
module.exports = offerModel
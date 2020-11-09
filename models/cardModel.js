'use strict'

function cardModel (sequelize, DataTypes){
   const cardModel =sequelize.define(
   'card',
   {
        user_id: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        expiration: DataTypes.STRING,
        timestamp_created: DataTypes.DATE,
        timestamp_created: DataTypes.DATE
   },
   {
      timestamp: false,
      freezeTableName: false
   }
   )
   cardModel.associate = (models) => {
      cardModel.belongsTo(models.User,{
         ForeignKey:'user_id'
      })
  }
   
   return cardModel
}
module.exports = cardModel


'use strict'
 function imageModel (sequelize, DataTypes){
     const imageModel =sequelize.define(
         'image',
         {
            instance_item: DataTypes.INTEGER,
            NUMBER: DataTypes.INTEGER,
            url: DataTypes.BLOB,
         },
         {
            timestamps: false,
            freezeTableName: false
         }
     )
     imageModel.associate = (models) => {
        imageModel.belongsTo(models.Credential,{
            foreignKey:'user_id' 
        })
    }
     return imageModel
        }
        module.exports = imageModel

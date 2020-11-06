'use strict'

function  cardModel (sequelize, DataTypes) {
    const cardModel = sequelize.define(
        'card',
        {
            user_id: DataTypes.INTEGER,
            number: DataTypes.INTEGER,
            expiration: DataTypes.STRING,
            timestamp_modified:DataTypes.DATE,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    cardModel.associate = (models) => {
        cardModel.belongsTo(models.Credential, {
            foreignKey: 'user_id'
       })
    }
    return  cardModel
}
   
 

module.exports = cardModel

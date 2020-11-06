'use strict'

const { item } = require("sequelize/types")
function itemModel (sequelize, DataTypes) {
    const itemModel = sequelize.define(
        'item',
        {
            id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            description: STRING,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    itemModel.associate = (models) => {
        itemModel.belongsTo(models.Credential, {
            foreignKey: 'user_id'
        })
    }
    return itemModel
}

module.exports = itemModel
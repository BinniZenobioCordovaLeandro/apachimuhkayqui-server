'use strict'

const { offerModel } = require("sequelize/types")

function offerModel (sequelize, DataTypes) {
    const offer = sequelize.define(
        'offer',
        {
            id: DataTypes.INTEGER,
            item_id: DataTypes.INTEGER,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    offerModel.associate = (models) => {
        offerModel.belongsTo(models.Credential, {
            foreignKey: 'item_id'
        })
    }
    return offerModel
}

module.exports = offerModel
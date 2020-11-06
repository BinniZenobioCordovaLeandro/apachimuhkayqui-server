'use strict'

function offerModel (sequelize, DataTypes) {
    const offerModel = sequelize.define(
        'offer',
        {
            item_id: DataTypes.INTEGER,
            timestamp_until: DataTypes.DATE,
            timestamp_since: DataTypes.DATE,
            porcentage: DataTypes.INTEGER
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    offerModel.associate = (models) => {
        offerModel.belongsTo(models.Item, {
            foreignKey: 'item_id'
        })
    }       
    return offerModel
}

module.exports = offerModel
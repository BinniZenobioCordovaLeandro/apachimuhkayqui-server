'use strict'

function itemModel(sequelize, Datatypes) {
    const itemModel = sequelize.define(
        'item', {
            user_id: Datatypes.INTEGER,
            description: Datatypes.STRING,
        }, {
            timestamps: false,
            freezeTableName: false,
        }
    )
    itemModel.associate = (models) => {
        itemModel.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
        itemModel.hasMany(models.InstanceItem, {
            foreignKey: 'item_id'
        })
        itemModel.hasMany(models.Offer, {
            foreignKey: 'item_id'
        })
    }
    return itemModel
}

module.exports = itemModel
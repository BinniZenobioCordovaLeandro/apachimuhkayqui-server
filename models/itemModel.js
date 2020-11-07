'use strict'

function itemModel(sequelize, Datatypes) {
    const itemModel = sequelize.define(
        'item',
        {
            user_id: Datatypes.INTEGER,
            description: Datatypes.STRING,
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    return itemModel
}

module.exports = itemModel
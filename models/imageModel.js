'use strict'

function imageModel(sequelize, Datatypes) {
    const imageModel = sequelize.define(
        'image',
        {
            instance_item_id: Datatypes.INTEGER ,
            url: Datatypes.BLOB,
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    return imageModel
}

module.exports = imageModel
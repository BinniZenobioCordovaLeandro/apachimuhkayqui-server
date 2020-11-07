'use strict'

function storeModel (sequelize, Datatypes) {
    const storeModel = sequelize.define(
    'store',
    {
        user_id: Datatypes.INTEGER,
        name: Datatypes.STRING,
        address: Datatypes.STRING,
        location: Datatypes.STRING,
        latitude: Datatypes.STRING,
        longitude: Datatypes.STRING,
        reference: Datatypes.STRING,
        document: Datatypes.STRING
    },
    {
        timestamps: false,
            freezeTableName: false
    }
    )
    return storeModel
}

module.exports = storeModel
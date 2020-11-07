'use strict'

function orderModel (sequelize, Datatypes) {
    const orderModel = sequelize.define(
    'order',
    {
        user_id: Datatypes.INTEGER,
        description: Datatypes.INTEGER,
        items: Datatypes.INTEGER,
        timestamp_modified: Datatypes.DATE,
        timestamp_created: Datatypes.DATE,
    },
    {
        timestamps: false,
            freezeTableName: false
    }
    )
    return orderModel
}

module.exports = orderModel
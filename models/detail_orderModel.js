'use strict'

function detail_orderModel (sequelize, Datatypes) {
    const detail_orderModel = sequelize.define(
        'detail_order',
        {
            order_id: Datatypes.INTEGER,
            lpn_id: Datatypes.INTEGER,
            timestamp_modified: Datatypes.DATE,
            timestamp_created: Datatypes.DATE,
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    return detail_orderModel
}

module.exports = detail_orderModel
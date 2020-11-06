'use strict'

function detail_order (sequalize, DataTypes) {
    const detail_order = sequalize.define(
        'detail_order',
        {
            order_id: DataTypes.INTEGER,
            lpn_id: DataTypes.INTEGER,
            timestamp_modified: DataTypes.STRING,
            timestamp_created: DataTypes.STRING
        },
        {
            freezeTableName: false,
            timestamps: false
        }
    )
    return detail_order
}
module.exports = detail_order
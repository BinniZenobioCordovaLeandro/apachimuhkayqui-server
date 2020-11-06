'use strict'

function imageModel (sequalize, DataType) {
    const imageModel = sequalize.define(
        'image',
        {
            instance_item_id: DataType.INTEGER,
            url: DataType.STRING
        },
        {
            freezeTableName: false,
            timestamps: false
        }
    )
    return imageModel
}
module.exports = imageModel
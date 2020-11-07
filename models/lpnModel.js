'user strict'

function lpnModel (sequelize, Datatypes) {
    const lpnModel = sequelize.define(
    'lpn',
    {
        instance_item_id: Datatypes.INTEGER,
        lpn: Datatypes.INTEGER,
    },
    {
        timestamps: false,
            freezeTableName: false
    }
    )
    return lpnModel
}

module.exports = lpnModel
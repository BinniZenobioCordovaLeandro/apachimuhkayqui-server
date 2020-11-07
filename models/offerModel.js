'use strict'

function offerModel (sequelize, Datatypes) {
    const offerModel = sequelize.define(
    'offer',
    {
        item_id: Datatypes.INTEGER,
        timestamp_since: Datatypes.DATE,
        timestamp_until: Datatypes.DATE,
        percentage: Datatypes.INTEGER,
    },
    {
        timestamps: false,
            freezeTableName: false
    }
    )
    return offerModel
}

module.exports = offerModel
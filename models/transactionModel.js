'use strict'

function transactionModel (sequelize, Datatypes) {
    const transactionModel = sequelize.define(
    'transaction',
    {
        user_id: Datatypes.INTEGER,
        order_id: Datatypes.INTEGER,
        description: Datatypes.TEXT,
        value: Datatypes.DECIMAL,
        type: Datatypes.CHAR,
        timestamp_modified: Datatypes.DATE,
        timestamp_created: Datatypes.DATE,

    },
    {
        timestamps: false,
            freezeTableName: false
    }
    )
    return transactionModel
}

module.exports = transactionModel
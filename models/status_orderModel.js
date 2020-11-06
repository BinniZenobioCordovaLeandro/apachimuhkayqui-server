'use strict'

function status_orderModel (sequelize, Datatypes) {
    const status_orderModel = sequelize.define(
    'status_order',
    {
        order_id: Datatypes.INTEGER,
        description: Datatypes.INTEGER,
        status: Datatypes.INTEGER,
        timestamp_modified: Datatypes.DATE,
        timestamp_created: Datatypes.DATE,
    },
    {timestamps: false,
        freezeTableName: false }
    )
    status_orderModel.associate = (models) => {
        status_orderModel.belongsTo(models.Order, { 
          foreignKey: 'order_id'
        })
    }
    return status_orderModel
}

module.exports = status_orderModel
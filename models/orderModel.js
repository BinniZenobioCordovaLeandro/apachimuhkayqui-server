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
    {timestamps: false,
        freezeTableName: false }
    )
    orderModel.associate = (models) => {
        orderModel.belongsTo(models.User, { 
          foreignKey: 'user_id'
        })
        orderModel.hasMany(models.Transaction, {
            foreignKey: 'order_id'
        })
        orderModel.hasMany(models.Detail_order, {
            foreignKey: 'order_id'
        })
        orderModel.hasMany(models.Status_order, {
            foreignKey: 'order_id'
        })
    }
    return orderModel
}

module.exports = orderModel
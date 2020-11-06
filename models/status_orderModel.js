'use strict'

function status_orderModel (sequelize, DataTypes) {
    const status_orderModel = sequelize.define(
        'status_order',
        {
            order_id: DataTypes.INTEGER,
            description: DataTypes.INTEGER,
            status: DataTypes.INTEGER,
            timestamp_modified: DataTypes.DATE,
            timestamp_created: DataTypes.DATE
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    status_orderModel.associate = (models) => {
        status_orderModel.belongsTo(models.Order, {
            foreignKey: 'order_id'
        })
    }       
    return status_orderModel
}

module.exports = status_orderModel
'use strict'

function orderModel (sequelize, DataTypes) {
    const orderModel = sequelize.define(
        'order',
        {
            user_id: DataTypes.INTEGER,
            description: DataTypes.INTEGER,
            items: DataTypes.INTEGER,
            timestamp_modified: DataTypes.DATE,
            timestamp_created: DataTypes.DATE
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    orderModel.associate = (models) => {
        orderModel.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
    }     
    return orderModel
}

module.exports = orderModel
'use strict'

function orderModel (sequelize, DataTypes) {
    const orderModel = sequelize.define(
        'order',
        {
            id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            password: DataTypes.BLOB,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    orderModel.associate = (models) => {
        orderModel.belongsTo(models.Credential, {
            foreignKey: 'user_id'
        })
    }
    return orderModel
}

module.exports = orderModel
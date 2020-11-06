'use strict'

function transactionModel (sequelize, DataTypes) {
    const transactionModel = sequelize.define(
        'transaction',
        {
            user_id: DataTypes.INTEGER,
            order_id: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            value: DataTypes.INTEGER,
            type: DataTypes.CHAR,
            timestamp_modified: DataTypes.DATE,
            timestamp_created: DataTypes.DATE
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    transactionModel.associate = (models) => {
        transactionModel.belongsTo(models.User, Order, {
            foreignKey: 'user_id',
            foreignKey: 'order_id'
        })
    }   
    return transactionModel
}

module.exports = transactionModel
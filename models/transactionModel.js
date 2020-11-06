'use strict'

function  transactionModel (sequelize, DataTypes) {
    const transactionModel = sequelize.define(
        ' transaction',
        {
            id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            order_id: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            value:DataTypes.DECIMAL,
            type:DataTypes.STRING,
            timestamp_created: DataTypes.DATE
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    transactionModel.associate = (models) => {
        transactionModel.belongsTo(models.Credential, {
            foreignKey: 'user_id',
            foreignKey: 'order_id'
        })
    }
    return  transactionModel
}

module.exports = transactionModel
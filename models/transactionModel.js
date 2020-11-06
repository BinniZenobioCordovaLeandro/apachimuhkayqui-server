'use strict'

function transactionModel (sequalize, DataTypes) {
    const transactionModel = sequalize.define(
        'transaction',
        {
            user_id: DataTypes.INTEGER,
            order_id: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            value: DataTypes.DECIMAL,
            type: DataTypes.CHAR,
            timestamp_modified: DataTypes.DATE,
            timestamp_created: DataTypes.DATE
        },
        {
            freezeTableName: false,
            timestamps: false
        }
    )
    transactionModel.associate=(models)=>{
        transactionModel.belongsTo(models.User, {
            foreignKey: 'user_id',
            foreignKey: 'order_id'
        })
    }
    return transactionModel
}
module.exports = transactionModel
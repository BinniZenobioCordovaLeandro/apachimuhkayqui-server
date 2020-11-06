'use strict'

function detail_orderModel (sequelize, DataTypes) {
    const detail_orderModel = sequelize.define(
        'detail_order',
        {
            order_id: DataTypes.INTEGER,
            lpn_id: DataTypes.INTEGER,
            timestamp_modified: DataTypes.DATE,
            timestamp_created: DataTypes.DATE
  
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    detail_orderModel.associate = (models) => {
        detail_orderModel.belongsTo(models.User, {
            foreignKey: 'user_id',
            foreignKey: 'lpn_id'
        })
    }
    return detail_orderModel
}

module.exports = detail_orderModel
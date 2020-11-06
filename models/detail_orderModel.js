'use strict'

function detail_orderModel(sequelize, Datatypes) {
    const detail_orderModel = sequelize.define(
        'detail_order',
        {
            order_id: Datatypes.INTEGER,
            lpn_id: Datatypes.INTEGER,
            items: Datatypes.INTEGER,
            timestamp_modified: Datatypes.DATE,
            timestamp_created: Datatypes.DATE,
        },
        {timestamps: false,
            freezeTableName: false }
    )
    detail_orderModel.associate = (models) => {
        detail_orderModel.belongsTo(models.Lpn, { 
          foreignKey: 'lpn_id'
        })
        detail_orderModel.belongsTo(models.Order, { 
            foreignKey: 'order_id'
          })
    }
    return detail_orderModel
}

module.exports = detail_orderModel
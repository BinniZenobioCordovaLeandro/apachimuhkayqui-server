'use strict'

function lpnModel (sequelize, Datatypes) {
    const lpnModel = sequelize.define(
    'lpn',
    {
        instance_item_id: Datatypes.INTEGER,
        lpn: Datatypes.INTEGER,
    },
    {timestamps: false,
        freezeTableName: false }
    )
    lpnModel.associate = (models) => {
        lpnModel.belongsTo(models.Instance_item, { 
          foreignKey: 'instance_item_id'
        })
        lpnModel.hasMany(models.Detail_order, {
            foreignKey: 'lpn_id'
        })
    }
    return lpnModel
}

module.exports = lpnModel
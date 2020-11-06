'use strict'

function lpnModel (sequelize, DataTypes) {
    const lpnModel = sequelize.define(
        'lpn',
        {
            instance_item_id: DataTypes.INTEGER,
            lpn: DataTypes.INTEGER
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    lpnModel.associate = (models) => {
        lpnModel.belongsTo(models.Instance_item, {
            foreignKey: 'instance_item_id'
        })
    }     
    return lpnModel
}

module.exports = lpnModel
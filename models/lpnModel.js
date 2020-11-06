'use strict'

function lpnModel (sequelize, DataTypes) {
    const lpnModel = sequelize.define(
        'lpn',
        {
            id: DataTypes.INTEGER,
            instance_item_id: DataTypes.INTEGER,
            lpn: DataTypes.INTEGER,
            
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    lpnModel.associate = (models) => {
        lpnModel.belongsTo(models.Credential, {
            foreignKey: 'instance_item_id'
        })
    }
    return lpnModel
}

module.exports = lpnModel
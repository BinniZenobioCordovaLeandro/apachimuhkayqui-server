'use strict'

function instanceItemModel(sequelize, Datatypes) {
    const instanceItemModel = sequelize.define(
        'instanceItem', {
            item_id: Datatypes.INTEGER,
            talla: Datatypes.STRING,
            volumen: Datatypes.STRING,
            color: Datatypes.STRING,
            precio: Datatypes.STRING,
            image: Datatypes.STRING,
            description: Datatypes.STRING
        }, {
            timestamps: false,
            freezeTableName: false,
        }
    )
    instanceItemModel.associate = (models) => {
        instanceItemModel.belongsTo(models.Item, {
            foreignKey: 'item_id'
        })
        instanceItemModel.hasMany(models.Image, {
            foreignKey: 'instance_item_id'
        })
        instanceItemModel.hasMany(models.Lpn, {
            foreignKey: 'instance_item_id'
        })
    }
    return instanceItemModel
}

module.exports = instanceItemModel
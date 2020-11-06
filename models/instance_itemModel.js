'use strict'

function instance_itemModel(sequelize, Datatypes) {
    const instance_itemModel = sequelize.define(
        'instance_item',
        {
            item_id: Datatypes.INTEGER,
            talla: Datatypes.STRING,
            volumen: Datatypes.STRING,
            color: Datatypes.STRING,
            precio: Datatypes.STRING,
            image: Datatypes.STRING,
            description: Datatypes.STRING,
        },
        {timestamps: false,
            freezeTableName: false }
    )
    instance_itemModel.associate = (models) => {
        instance_itemModel.belongsTo(models.Item, { 
          foreignKey: 'Item_id'
        })
        instance_itemModel.hasMany(models.Lpn, {
            foreignKey: 'instance_item_id'
        })
        instance_itemModel.hasMany(models.Image, {
            foreignKey: 'instance_item_id'
        })
    }
    return instance_itemModel
}

module.exports = instance_itemModel
'use strict'

function instanceItemModel(sequelize, DataTypes) {
    const instanceItemModel = sequelize.define(
        'instanceItem',
        {
            item_id: DataTypes.INTEGER,
            talla: DataTypes.STRING,
            volumen: DataTypes.STRING,
            color: DataTypes.STRING,
            precio: DataTypes.STRING,
            image: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {
            timestamps: false,
            freezeTableName: false
        }
    )
    return instanceItemModel
}

module.exports = instanceItemModel
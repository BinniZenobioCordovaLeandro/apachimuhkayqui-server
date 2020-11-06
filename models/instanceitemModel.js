'use strict'

function instanceitemModel (sequalize, DataTypes) {
    const instanceitemModel = sequalize.define(
        'instanceitem',
        {
            item_id: DataTypes.INTEGER,
            talla: DataTypes.CHAR,
            volumen: DataTypes.CHAR,
            color: DataTypes.CHAR,
            precio: DataTypes.INTEGER,
            image: DataTypes.STRING,
            description: DataTypes.STRING
        },
        {
            freezeTableName: false,
            timestamps: false
        }
    )  
    return instanceitemModel
}
module.exports = instanceitemModel
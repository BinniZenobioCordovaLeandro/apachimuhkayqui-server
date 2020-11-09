'use strict'

function instance_itemModel (sequelize, DataTypes){
   const instance_itemModel =sequelize.define(
   'instance_item',
   {
        item_id: DataTypes.INTEGER,
        talla: DataTypes.STRING,
        volumen: DataTypes.STRING,
        color: DataTypes.STRING,
        precio: DataTypes.STRING,
        image: DataTypes.STRING,
        descripcion: DataTypes.STRING
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   return instance_itemModel
}
module.exports = instance_itemModel


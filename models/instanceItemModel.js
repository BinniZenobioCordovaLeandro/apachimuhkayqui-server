'use strict'

function instanceItemModel (sequelize, DataTypes) {
  const instanceItemModel = sequelize.define(
    'instanceItem',
    {
      item_id: DataTypes.INTEGER,
      talla: DataTypes.CHAR,
      volumen: DataTypes.CHAR,
      color: DataTypes.CHAR,
      precio: DataTypes.CHAR,
      image: DataTypes.STRING,
      desciption: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return instanceItemModel
}
module.exports = instanceItemModel

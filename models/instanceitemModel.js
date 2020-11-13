'use strict'

function instanceItemModel (sequalize, DataTypes) {
  const instanceItemModel = sequalize.define(
    'instanceItem',
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
  return instanceItemModel
}
module.exports = instanceItemModel

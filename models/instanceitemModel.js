'use strict'

function instanceItemModel (sequalize, DataTypes) {
  const instanceItemModel = sequalize.define(
    'instanceItem',
    {
      item_id: DataTypes.INTEGER,
      talla: DataTypes.STRING,
      volumen: DataTypes.STRING,
      color: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: {
        type: DataTypes.BLOB,
        get: function () {
          return (this.getDataValue('image')).toString('utf8')
        }
      },
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

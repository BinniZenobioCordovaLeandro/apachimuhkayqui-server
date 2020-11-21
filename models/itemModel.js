'use strict'

function itemModel (sequalize, DataTypes) {
  const itemModel = sequalize.define(
    'item',
    {
      user_id: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: {
        type: DataTypes.BLOB,
        get: function () {
          return (this.getDataValue('image')).toString('utf8')
        }
      }
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  itemModel.associate = (models) => {
    itemModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    itemModel.hasMany(models.Offer, {
      foreignKey: 'item_id'
    })
  }
  return itemModel
}
module.exports = itemModel

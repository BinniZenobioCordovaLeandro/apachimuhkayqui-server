'use strict'

function itemModel (sequelize, DataTypes) {
  const itemModel = sequelize.define(
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
      timestamps: false,
      freezeTableName: false
    }
  )
  itemModel.associate = (models) => {
    itemModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return itemModel
}

module.exports = itemModel

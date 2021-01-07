'use strict'

function instanceItemModel (sequelize, DataTypes) {
  const instanceItemModel = sequelize.define(
    'instance_item',
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
  instanceItemModel.associate = (models) => {
    instanceItemModel.belongsTo(models.Item, {
      foreignKey: 'Item_id'
    })
    instanceItemModel.hasMany(models.Lpn, {
      foreignKey: 'instance_item_id'
    })
    instanceItemModel.hasMany(models.Image, {
      foreignKey: 'instance_item_id'
    })
  }
  return instanceItemModel
}

module.exports = instanceItemModel

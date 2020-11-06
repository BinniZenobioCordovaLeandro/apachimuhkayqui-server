'use strict'

function itemModel (sequelize, DataTypes) {
  const itemModel = sequelize.define(
    'item',
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.STRING
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
    itemModel.hasMany(models.Instance_item, {
      foreignKey: 'item_id'
    })
  }

  return itemModel
}

module.exports = itemModel

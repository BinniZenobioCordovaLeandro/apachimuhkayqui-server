'use strict'

function itemModel (sequelize, DataTypes) {
  const itemModel = sequelize.define(
    'item',
    {
      user_id: DataTypes.INTEGER,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      description: DataTypes.STRING,
      precio: DataTypes.DECIMAL
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

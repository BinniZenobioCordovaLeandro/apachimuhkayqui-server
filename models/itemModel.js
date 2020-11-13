'use strict'

function itemModel (sequalize, DataTypes) {
  const itemModel = sequalize.define(
    'item',
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.STRING
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
  }
  return itemModel
}
module.exports = itemModel

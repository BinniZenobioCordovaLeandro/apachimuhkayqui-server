'use strict'

function imageModel (sequelize, DataTypes) {
  const imageModel = sequelize.define(
    'image',
    {
      instance_item_id: DataTypes.INTEGER,
      url: DataTypes.BLOB
    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  imageModel.associate = (models) => {
    imageModel.belongsTo(models.InstanceItem, {
      foreignKey: 'instance_item_id'
    })
  }
  return imageModel
}

module.exports = imageModel

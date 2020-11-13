'use strict'

function imageModel (sequelize, Datatypes) {
  const imageModel = sequelize.define(
    'image',
    {
      instance_item_id: Datatypes.INTEGER,
      url: Datatypes.BLOB
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

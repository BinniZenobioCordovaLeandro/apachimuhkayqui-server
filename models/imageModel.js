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
  return imageModel
}

module.exports = imageModel

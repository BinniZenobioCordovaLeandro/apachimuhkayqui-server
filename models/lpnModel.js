'use strict'

function lpnModel (sequelize, DataTypes) {
  const lpnModel = sequelize.define(
    'lpn',
    {

      instance_item_id: DataTypes.INTEGER,
      lpn: DataTypes.INTEGER

    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  return lpnModel
}

module.exports = lpnModel

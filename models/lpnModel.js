'use strict'

function lpnModel (sequalize, DataTypes) {
  const lpnModel = sequalize.define(
    'lpn',
    {
      instance_item_id: DataTypes.INTEGER,
      lpn: DataTypes.INTEGER
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return lpnModel
}
module.exports = lpnModel

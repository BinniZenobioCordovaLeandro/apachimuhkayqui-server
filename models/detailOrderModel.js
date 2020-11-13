'use strict'

function detailOrder (sequalize, DataTypes) {
  const detailOrder = sequalize.define(
    'detailOrder',
    {
      order_id: DataTypes.INTEGER,
      lpn_id: DataTypes.INTEGER,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return detailOrder
}
module.exports = detailOrder

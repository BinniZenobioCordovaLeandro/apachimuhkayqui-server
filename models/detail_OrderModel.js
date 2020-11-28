'use strict'

function detail_Order (sequalize, DataTypes) {
  const detail_Order = sequalize.define(
    'detail_Order',
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
  return detail_Order
}
module.exports = detail_Order

'use strict'

function offerModel (sequalize, DataTypes) {
  const offerModel = sequalize.define(
    'offer',
    {
      item_id: DataTypes.INTEGER,
      timestamp_since: DataTypes.DATE,
      timestamp_until: DataTypes.DATE,
      percentage: DataTypes.INTEGER
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return offerModel
}
module.exports = offerModel

'use strict'

function offerModel (sequelize, DataTypes) {
  const offerModel = sequelize.define(
    'offer',
    {
      item_id: DataTypes.INTEGER,
      timestamp_since: DataTypes.DATE,
      timestamp_until: DataTypes.DATE,
      porcentage: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return offerModel
}
module.exports = offerModel

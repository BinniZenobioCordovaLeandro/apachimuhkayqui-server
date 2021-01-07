'use strict'

function offerModel (sequelize, DataTypes) {
  const offerModel = sequelize.define(
    'offer',
    {
      item_id: DataTypes.INTEGER,
      timestamp_since: DataTypes.DATE,
      timestamp_until: DataTypes.DATE,
      percentage: DataTypes.INTEGER
    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  offerModel.associate = (models) => {
    offerModel.belongsTo(models.Item, {
      foreignKey: 'item_id'
    })
  }
  return offerModel
}

module.exports = offerModel

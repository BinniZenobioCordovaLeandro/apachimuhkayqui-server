'use strict'

function offerModel (sequelize, Datatypes) {
  const offerModel = sequelize.define(
    'offer', {
      item_id: Datatypes.INTEGER,
      timestamp_since: Datatypes.DATE,
      timestamp_until: Datatypes.DATE,
      porcentaje: Datatypes.INTEGER
    }, {
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

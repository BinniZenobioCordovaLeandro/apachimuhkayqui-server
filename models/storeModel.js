'use strict'

function storeModel (sequelize, Datatypes) {
  const storeModel = sequelize.define(
    'store', {
      user_id: Datatypes.INTEGER,
      name: Datatypes.STRING,
      address: Datatypes.STRING,
      location: Datatypes.STRING,
      latitude: Datatypes.STRING,
      longitude: Datatypes.STRING,
      reference: Datatypes.STRING,
      document: Datatypes.STRING
    }, {
      timestamps: false,
      freezeTableName: false
    }
  )
  storeModel.associate = (models) => {
    storeModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return storeModel
}

module.exports = storeModel

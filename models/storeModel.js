'use strict'

function storeModel (sequalize, DataTypes) {
  const storeModel = sequalize.define(
    'store',
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      location: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      reference: DataTypes.STRING,
      document: DataTypes.STRING
    },
    {
      freezeTableName: false,
      timestamps: false
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

'use strict'

function storeModel (sequalize, DataTypes) {
  const storeModel = sequalize.define(
    'store',
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.CHAR,
      location: DataTypes.CHAR,
      latitude: DataTypes.DATE,
      longitude: DataTypes.DATE,
      reference: DataTypes.CHAR,
      document: DataTypes.BLOB
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

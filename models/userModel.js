'use strict'

function userModel (sequalize, DataTypes) {
  const userModel = sequalize.define(
    'user',
    {
      fullname: DataTypes.STRING,
      alias: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.CHAR,
      document: DataTypes.CHAR
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  userModel.associate = (models) => {
    userModel.hasMany(models.Credential, {
      foreignKey: 'user_id'
    })
    userModel.hasMany(models.Card, {
      foreignKey: 'user_id'
    })
    userModel.hasMany(models.Store, {
      foreignKey: 'user_id'
    })
    userModel.hasMany(models.Item, {
      foreignKey: 'user_id'
    })
    userModel.hasMany(models.Transaction, {
      foreignKey: 'user_id',
      foreignKey: 'order_id'
    })
    userModel.hasMany(models.Order, {
      foreignKey: 'user_id'
    })
  }
  return userModel
}
module.exports = userModel

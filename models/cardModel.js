'use strict'

function cardModel (sequelize, DataTypes) {
  const cardModel = sequelize.define(
    'card',
    {
      user_id: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      expiration: DataTypes.STRING,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return cardModel
}
module.exports = cardModel

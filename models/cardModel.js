'use strict'

function cardModel (sequalize, DataTypes) {
  const cardModel = sequalize.define(
    'card',
    {
      user_id: DataTypes.INTEGER,
      number: DataTypes.INTEGER,
      expiration: DataTypes.STRING,
      timestamp_modified: DataTypes.STRING,
      timestamp_created: DataTypes.STRING
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  cardModel.associate = (models) => {
    cardModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return cardModel
}
module.exports = cardModel

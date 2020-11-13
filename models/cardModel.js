'use strict'

function cardModel (sequelize, Datatypes) {
  const cardModel = sequelize.define(
    'card',
    {
      user_id: Datatypes.INTEGER,
      number: Datatypes.INTEGER,
      expiration: Datatypes.STRING,
      timestamp_modified: Datatypes.DATE,
      timestamp_created: Datatypes.DATE
    },
    {
      timestamps: false,
      freezeTableName: false
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

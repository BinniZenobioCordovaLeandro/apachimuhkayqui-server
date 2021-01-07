'use strict'

function transactionModel (sequelize, DataTypes) {
  const transactionModel = sequelize.define(
    'transaction',
    {
      user_id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      value: DataTypes.DECIMAL,
      type: DataTypes.CHAR,
      timestamp_modified: DataTypes.DATE,
      timestamp_created: DataTypes.DATE

    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  transactionModel.associate = (models) => {
    transactionModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return transactionModel
}

module.exports = transactionModel

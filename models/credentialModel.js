'use strict'

function credentialModel (sequelize, DataTypes) {
  const credentialModel = sequelize.define(
    'credential',
    {
      user_id: DataTypes.INTEGER,
      password: {
        type: DataTypes.STRING,
        get: function () {
          return (this.getDataValue('password')).toString('utf8')
        }
      },
      timestamp_created: DataTypes.DATE
    },
    {
      timestamps: false,
      freezeTableName: false
    }
  )
  credentialModel.associate = (models) => {
    credentialModel.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
  }
  return credentialModel
}

module.exports = credentialModel

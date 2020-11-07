'use strict'

function credentialModel (sequelize, Datatypes) {
    const credentialModel = sequelize.define(
    'credential',
    {
        user_id: Datatypes.INTEGER,
        password :Datatypes.STRING,
        timestamp_created: Datatypes.DATE,
    },
    {        timestamps: false,
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
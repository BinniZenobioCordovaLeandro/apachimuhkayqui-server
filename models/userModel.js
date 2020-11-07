'use strict'

function userModel (sequelize, Datatypes) {
    const userModel = sequelize.define(
    'user',
    {
        fullname: Datatypes.STRING,
        alias:Datatypes.STRING,
        email:Datatypes.STRING,
        phone:Datatypes.CHAR,
        document:Datatypes.CHAR,
    },
    {
        timestamps: false,
      freezeTableName: false
    }
    )
    userModel.associate = (models) => {
        userModel.hasMany(models.Credential, {
            foreignKey: 'user_id'  
        })
    }
    return userModel
}

module.exports = userModel
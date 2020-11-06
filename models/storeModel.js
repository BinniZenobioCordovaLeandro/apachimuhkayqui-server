'use strict'

function storeModel (sequelize, DataTypes) {
    const storeModel = sequelize.define(
        'store',
        {
            id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            address:DataTypes.STRING,
            location:DataTypes.STRING,
            latitude:DataTypes.STRING,
            longitude:DataTypes.STRING,
            reference:DataTypes.STRING,
            document:DataTypes.STRING
        },
        {  timestamps: false,
            freezeTableName: false
        }
    )
    storeModel.associate = (models) => {
        storeModel.belongsTo(models.Credential, {
            foreignKey: 'user_id'
        })
    }
    return storeModel
}

module.exports = storeModel
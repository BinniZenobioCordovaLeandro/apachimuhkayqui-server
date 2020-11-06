'use strict'

function credentialModel (sequalize, DataTypes) {
    const credentialModel = sequalize.define(
        'credential',
        {
            user_id: DataTypes.INTEGER,
            password: {
                type: DataTypes.STRING,
                get: function() {
                    return (this.getDataValue("password")).toString('utf8')
                }
            },
            timestamp_created: DataTypes.STRING
        },
        {
            freezeTableName: false,
            timestamps: false
        }
    )
    credentialModel.associate=(models)=>{
        credentialModel.belongsTo(models.User,{
            foreignKey: 'user_id'
        })
    }
    return credentialModel
}
module.exports = credentialModel

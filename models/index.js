const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel= require('./credentialModel')
const userModel = require('./userModel')
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/apachimuchkayqui')
const User = UserModel(sequelize,Sequelize)
const Credential=CredentialModel(sequelize,Sequelize)
User.associate({Credential: Credential})
Credential.associate({User: User})
module.exports = {
    User,
    Credential
}

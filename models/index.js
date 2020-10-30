const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')

const sequelize = new Sequelize('mysql://bcordova:Platanit05@3.208.60.34:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)

User.associate({ Credential: Credential })
Credential.associate({ User: User })

module.exports = {
  User,
  Credential
}

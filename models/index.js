const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')
const CardModel = require('./cardModel')

const sequelize = new Sequelize('mysql://root:root@localhost:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)

User.associate({ Credential: Credential, Card: Card })
Credential.associate({ User: User })
Card.associate({ User: User })

module.exports = {
  User,
  Credential,
  Card
}

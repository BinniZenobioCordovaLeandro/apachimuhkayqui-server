const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')
const CardModel = require('./cardModel')
const ItemModel = require('./itemModel')

const sequelize = new Sequelize('mysql://bcordova:Platanit05@primate-migrate-ultimate-cluster.cluster-cqscyymggatg.us-east-1.rds.amazonaws.com:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)
const Item = ItemModel(sequelize, Sequelize)

User.associate({ Credential: Credential, Card: Card })
Credential.associate({ User: User })
Card.associate({ User: User })
Item.associate({ User: User })

module.exports = {
  User,
  Credential,
  Card,
  Item
}

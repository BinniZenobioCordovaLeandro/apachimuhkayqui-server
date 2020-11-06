const Sequelize = require('Sequelize')
const UserModel = require('./userModel')
const CredentialModel = require('./credentialModel')
const CardModel = require('./cardModel')
const DetailOrderModel = require('./detailOrderModel')
const ImageModel = require('./imageModel')
const InstanceItemModel = require('./instanceItemModel')
const ItemModel = require('./itemModel')
const LpnModel = require('./lpnModel')
const OfferModel = require('./offerModel')
const OrderModel = require('./orderModel')
const StatusOrderModel = require('./statusOrderModel')
const StoreModel = require('./storeModel')
const TransactionModel = require('./transactionModel')

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)
const DetailOrder = DetailOrderModel(sequelize, Sequelize)
const Image = ImageModel(sequelize, Sequelize)
const InstanceItem = InstanceItemModel(sequelize, Sequelize)
const Item = ItemModel(sequelize, Sequelize)
const Lpn = LpnModel(sequelize, Sequelize)
const Offer = OfferModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const StatusOrder = StatusOrderModel(sequelize, Sequelize)
const Store = StoreModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)

User.associate({ Credential: Credential })
Credential.associate({ User: User })

module.exports = {
  User,
  Credential,
  Card,
  DetailOrder,
  Image,
  InstanceItem,
  Item,
  Lpn,
  Offer,
  Order,
  StatusOrder,
  Store,
  Transaction
}

const Sequelize = require('sequelize')
const UserModel = require('./userModel')
const CredentialModel =require('./credentialModel')
const CardModel =require('./cardModel')
const ImageModel =require('./imageModel')
const ItemModel =require('./itemModel')
const LpnModel =require('./IpnModel')
const OfferModel =require('./offerModel')
const OrderModel =require('./orderModel')
const Status_orderModel =require('./status_orderModel')
const TransactionModel =require('./transactionModel')
const Detail_orderModel =require('./detail_orderModel')
const Instance_ItemModel =require('./instance_ItemModel')
const StoreModel =require('./storeModel')

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/apachimuhkayqui')

const User = UserModel(sequelize, Sequelize)
const Credential = CredentialModel(sequelize, Sequelize)
const Card = CardModel(sequelize, Sequelize)
const Image = ImageModel(sequelize, Sequelize)
const Item = ItemModel(sequelize, Sequelize)
const Lpn = LpnModel(sequelize, Sequelize)
const Offer = OfferModel(sequelize, Sequelize)
const Order = OrderModel(sequelize, Sequelize)
const Status_order = Status_orderModel(sequelize, Sequelize)
const Transaction = TransactionModel(sequelize, Sequelize)
const Detail_order = Detail_orderModel(sequelize, Sequelize)
const Instance_Item = Instance_ItemModel(sequelize, Sequelize)
const Store = StoreModel(sequelize, Sequelize)

User.associate({Credential: Credential})
Credential.associate({User: User})


module.exports = {
    User,
    Credential,
    Card,
    Image,
    Item,
    Lpn,
    Offer,
    Order,
    Status_order,
    Transaction,
    Detail_order,
    Instance_Item,
    Store
}
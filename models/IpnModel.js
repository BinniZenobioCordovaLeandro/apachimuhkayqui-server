'use strict'

function IpnModel (sequelize, DataTypes){
   const IpnModel =sequelize.define(
   'Ipn',
   {
        instance_item: DataTypes.INTEGER,
        ipn: DataTypes.INTEGER
   },
   {
      timestamps: false,
      freezeTableName: false
   }
   )
   return IpnModel
}
module.exports = IpnModel

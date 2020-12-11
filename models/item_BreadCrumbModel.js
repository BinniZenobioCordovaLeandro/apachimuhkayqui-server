'use strict'

function item_BreadCrumbModel (sequalize, DataTypes) {
  const item_BreadCrumbModel = sequalize.define(
    'item_BreadCrumb',
    {
      item_id: DataTypes.INTEGER,
      breadcrumb_id: DataTypes.INTEGER
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  
  return item_BreadCrumbModel
}
module.exports = item_BreadCrumbModel
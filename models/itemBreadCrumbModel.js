'use strict'

function itemBreadCrumbModel (sequalize, DataTypes) {
  const itemBreadCrumbModel = sequalize.define(
    'itemBreadCrumb',
    {
      item_id: DataTypes.INTEGER,
      breadcrumb_id: DataTypes.INTEGER
    },
    {
      freezeTableName: false,
      timestamps: false
    }
  )
  return itemBreadCrumbModel
}
module.exports = itemBreadCrumbModel
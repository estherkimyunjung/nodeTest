const Sequelize = require('sequelize')
const {STRING, INTEGER} = Sequelize

const seq = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
})

const House = seq.define('houses', {
  address: {
    type: STRING
  },
  price: {
    type: INTEGER
  },
  detail: {
    type: STRING
  },
  url: {
    type: STRING
  }
})

module.exports = House
seq.sync()
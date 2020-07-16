const House = require('./models/House')

House.sync()
  
const houses = [

  {
    "address": "address1",
    "price": 12345,
    "detail": "3bds 2bths 2222sqrt",
    "url": "https://photos.zillowstatic.com/p_e/ISzzhd1sxzztko0000000000.jpg"
  },
  {
    "address": "address2",
    "price": 23456,
    "detail": "3bds 2bths 3333sqrt",
    "url": "https://photos.zillowstatic.com/p_e/ISzzhd1sxzztko0000000000.jpg"
  }
]

houses.forEach(house => House.create(house))


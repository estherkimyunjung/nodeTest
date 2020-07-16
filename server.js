const express = require('express')
const bodyParser = require('body-parser')
const House = require("./models/House")
const pry = require('pryjs')
const cors = require('cors')

const soket = require('socket.io')()
io.on('connection', socket => {
  socket.on('random', payload => {
    console.log(payload)
  })
})

io.listen(8080)


const app = express()
app.use(bodyParser.json())
app.use(cors())

// House.hasOne(Shopper)
// Shooper.hasMany(House)

const port = 8000
app.listen(port, () => console.log ("I'm listening at " + port))

app.get("/home", (req, res) => {
  res.json("HI!!!")
})

app.get("/houses", (req, res) => {
  House.findAll()
  .then(houses => res.json(houses))
})

app.get("/houses/:id", async (req, res) => {
  // eval(pry.it)
  house = await House.findByPk(req.params.id)
  res.json(house)
})

app.post("/houses", async (req, res) => {
  // eval(pry.it)
  house = await House.create(req.body)
  res.json(house)
})

app.patch("/houses/:id", async (req, res) => {
  house = await House.findByPk(req.params.id)
  await house.update(req.body)
  res.json(house)
})

app.delete("/houses/:id", async (req, res) => {
  house = await House.findByPk(req.params.id)
  house.destroy()
})
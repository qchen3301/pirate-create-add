const express = require('express')
const app = express()
const hbs = require('hbs')
app.set('view engine', 'hbs')

const PORT = process.env.PORT || 3000

let pirateController = require('./controllers/pirates.js')



app.use("/pirates", pirateController)

app.listen(PORT, function(){
    console.log('Avast ye scurvy doge (wow)')
    console.log('+======================+')
    console.log(`+LISTENING ON PORT ${PORT}+`)
    console.log('+======================+')
})  



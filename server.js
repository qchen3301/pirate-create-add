const express = require('express')
const app = express()
const hbs = require('hbs')

const PORT = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.listen(PORT, function(){
    console.log('+======================+')
    console.log(`+LISTENING ON PORT ${PORT}+`)
    console.log('+======================+')
})  



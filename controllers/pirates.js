//your code below
let express = require("express");
let router = express.Router();
let pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', (req,res)=> {
    
    res.render('../views/index.hbs', {
        /*  piratesList is the name of the object array inside of the file pirate.js, 
            which is ACCESSED by the variable declared in line 4 'pirate = require(blah blah blah)'
             pirateName is in Index.hbs...it is the 'tag' that tells res.render 
             in the {{#each}} function WHAT to process in index.hbs, 
             {{name}} is a paramter (along with birthplace, death_Year, etc) in the array of objects */
        pirateName: pirates.piratesList
    })
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', (req, res)=> {
    res.render('show', {
        pirateName: pirates.piratesList[req.params.id].name,
        pirateBirthplace: pirates.piratesList[req.params.id].birthplace,
        pirateExpirationDate: pirates.piratesList[req.params.id].death_year,
        pirateBase: pirates.piratesList[req.params.id].base,
        pirateNommedeguerre: pirates.piratesList[req.params.id].nickname
    })
})


//exports
module.exports = router;
//your code below
let express = require("express");
let router = express.Router();
let pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', (req,res)=> {
    
    res.render('../views/index.hbs', {
        pirateName: pirates.piratesList
    })
})

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', (req, res)=> {
    res.render('show')
})


//exports
module.exports = router;
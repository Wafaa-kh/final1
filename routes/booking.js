const express = require('express')
const router = express.Router();
const bookingContreoller = require('../controller/bookingContreoller.js')
router.get('/booking',bookingContreoller.getMainPage)
router.get('/booking/:name', bookingContreoller.getpPoducts)
module.exports = router


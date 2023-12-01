const express = require('express')
const router = express.Router();

const  mainControlller =  require("../controllers/mainController")
/*
app routes
*/ 
router.get('/',mainControlller.homepage);
router.get('/about',mainControlller.about);


 module.exports = router


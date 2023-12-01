const express = require('express')
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth')
const  dashboardControlller =  require("../controllers/dashboardControllers")

/*Dashboard Routes*/
router.get('/dashboard', isLoggedIn,  dashboardControlller.dashboardpage);
module.exports = router;
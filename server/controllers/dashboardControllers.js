const Note = require('../models/Notes')
const mongoose= require('mongoose')






exports.dashboardpage = async (req, res) => {
  
  const locals = {
      title: "Dashboard",
      description: "Free NodeJS Notes App.",
    }

    try {
      
    } catch (error) {
      
    }


    res.render('dashboard/dash', {
      userName: req.user.firstName,
      locals,
      layout: '../views/layouts/dashboard'
    });
   }
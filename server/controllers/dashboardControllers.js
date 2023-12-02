const Note = require('../models/Notes')
const mongoose= require('mongoose')






exports.dashboardpage = async (req, res) => {
  
  const locals = {
      title: "Dashboard",
      description: "Free NodeJS Notes App By Sayed Masuma.",
    }

    try {
      const notes = await Note.find({})
      res.render('dashboard/dash', {
        userName: req.user.firstName,
        locals,
        notes,
        layout: '../views/layouts/dashboard'
      });
 
    } catch (error) {
      
    }


 
   }
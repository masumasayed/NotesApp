const Note = require('../models/Notes')
const mongoose= require('mongoose')






exports.dashboardpage = async (req, res) => {
  let  perPage = 12;
  let page = req.query.page || 1
  const locals = {
      title: "Dashboard",
      description: "Free NodeJS Notes App By Sayed Masuma.",
    }

    try {
      const notes = await Note.aggregate([
        
      ])

      //latest note ke liye
      res.render('dashboard/dash', {
        userName: req.user.firstName,
        locals,
        notes,
        layout: '../views/layouts/dashboard'
      });
 
    } catch (error) {
      
    }


 
   }
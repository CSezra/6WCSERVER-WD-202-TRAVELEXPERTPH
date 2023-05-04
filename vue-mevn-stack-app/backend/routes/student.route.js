const express = require('express');
const blogRoute = express.Router();
// model
let blogModel = require('../models/Blogs');
blogRoute.route('/create-blog').post((req, res, next) => {
  blogModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
blogRoute.route('/').get((req, res, next) => {
    blogModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })


//View Blog
blogRoute.route('/view-blog/:id').get((req, res, next) => {
   blogModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
blogRoute.route('/update-blog/:id').put((req, res, next) => {
  blogModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete
blogRoute.route('/delete-blog/:id').delete((req, res, next) => {
  blogModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = blogRoute;
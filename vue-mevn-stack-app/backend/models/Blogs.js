const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Blogs = new Schema({
  title: {
    type: String
  },
  category: {
    type: String
  },
  content: {
    type: String
  },
}, {
  collection: 'blogs'
})
module.exports = mongoose.model('blog', Blogs)
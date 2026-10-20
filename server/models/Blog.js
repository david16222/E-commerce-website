const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  heroImage: String,
  authorName: String,
  authorRole: String,
  tags: [String],
  content: String,

  userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User',
  required: false
  },

  createdAt: {
    type: Date
  }
});

module.exports = mongoose.model('Blog', blogSchema);

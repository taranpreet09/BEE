const mongoose = require('mongoose');

const schema = mongoose.Schema;
const BlogPost = new schema({  
    title: String,
    body: String,
    date: Date
});
mongoose.model('Blog', BlogPost);

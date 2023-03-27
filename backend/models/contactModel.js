const { default: mongoose } = require("mongoose");

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  phone : {
    type: String,
  },
  type : {
    type: String,
    enum: ["personal", "professional"],
    default: 'personal'
  },
},{timestamps:true});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
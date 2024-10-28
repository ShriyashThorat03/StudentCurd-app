const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { 
    type: String, 
    enum: ['Computer Science', 'ENTC', 'Civil', 'Mechanical', 'IT'],
    required: true 
  }
});

module.exports = mongoose.model('Student', studentSchema);

// const mongoose = require('mongoose');

// const moodSchema = new mongoose.Schema({
//   message: { type: String, required: true },
//   mood: { type: String },
//   suggestions: { type: [String] }, // Array of suggestions
//   date: { type: Date, default: Date.now },
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
// });

// const Mood = mongoose.model('Mood', moodSchema);
// module.exports = Mood;




// new
const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  message: { 
    type: String, 
    required: true 
  },
  mood: { 
    type: String, 
    default: 'Unknown' // Default mood value if not provided
  },
  suggestions: { 
    type: [String], 
    default: [] // Default empty array if no suggestions provided
  },
  date: { 
    type: Date, 
    default: Date.now // Default to current timestamp
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;

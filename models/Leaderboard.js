const { Schema, model } = require('mongoose');

// Schema to create leaderboard model
const leaderboardSchema = new Schema(
  {
    username: { 
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    // ? score
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// ? SET VIRTUAL

// Initialize our Leaderboard model
const Leaderboard = model('leaderboard', leaderboardSchema);

module.exports = Leaderboard;

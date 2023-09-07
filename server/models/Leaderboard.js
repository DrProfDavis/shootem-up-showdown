const { Schema, model } = require('mongoose');

// Schema to create leaderboard model
const leaderboardSchema = new Schema(
  {
    // // ID for game scores
    // leaderboardId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
    score: { 
      type: Number,
      required: true
    },
    leaderboardUser: { 
      type: String,
      required: true,
      trim:true
    },
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


// Initialize our Leaderboard model
const Leaderboard = model('leaderboard', leaderboardSchema);

module.exports = Leaderboard;

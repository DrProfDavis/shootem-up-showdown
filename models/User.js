const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { 
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 30,
    },
    email: { 
      type: String,
      required: true,
      unique: true,
      required: true,
      // must match a valid email address
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    password: { 
      type: String,
      required: true,
      match: [/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Passwords must have at least 8 characters, 1 uppercase letter, and 1 lowercase letter']
    },    
    leaderboard: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Leaderboard',
      },
    ],
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

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

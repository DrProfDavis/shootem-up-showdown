const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
      required: false,
      unique: true,
      required: true,
      // must match a valid email address
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    password: { 
      type: String,
      required: true,      
      // must match a valid password
      match: [/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Passwords must have at least 8 characters, 1 uppercase letter, and 1 lowercase letter']
    },    
    leaderboard: [
      {
        type: Schema.Types.ObjectId,
        ref: 'leaderboard',
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

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//virtual called leaderboardCount that retrieves the length of the user's leaderboard (game scores) array field on query 
userSchema
  .virtual('leaderboardCount')
  .get(function () {
    return this.leaderboard.length;
  });

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;

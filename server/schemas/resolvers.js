const { AuthenticationError } = require('apollo-server-express');
const { User, Leaderboard } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'leaderboard',
          populate: 'score'
        });

        user.leaderboard.sort((a, b) => b.score - a.score);


        return user;
      }

      throw new AuthenticationError('Not logged in!');
    },
    leaderboards: async () => {
      return await Leaderboard.find();
    },
    addLeaderboard: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const leaderboard = new Leaderboard({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { leaderboards: leaderboard } });

        return leaderboard;
      }

      throw new AuthenticationError('Not logged in!');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in!');
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect username!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;

const { AuthenticationError } = require('apollo-server-express');
const { User, Leaderboard } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('leaderboard');

        user.leaderboard.sort((a, b) => b.score - a.score);


        return user;
      }

      throw new AuthenticationError('Not logged in!');
    },
    leaderboard: async () => {
      return await Leaderboard.find();
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addLeaderboard: async (parent, args) => {
      console.log(context);
      if (context.user) {
        const leaderboard = await Leaderboard.create(args);

        await User.findByIdAndUpdate(context.user._id, { $push: { leaderboards: leaderboard } });

        return leaderboard;
      }

      throw new AuthenticationError('Not logged in!');
    // },
    // updateUser: async (parent, args, context) => {
    //   if (context.user) {
    //     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
    //   }

    //   throw new AuthenticationError('Not logged in!');
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

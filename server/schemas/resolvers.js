const { AuthenticationError } = require('apollo-server-express');
const { User, Leaderboard } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('leaderboard');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('leaderboard');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('leaderboard');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    leaderboards: async () => {
      return await Leaderboard.find();
    },
    leaderboard: async (parent, { leaderboardId }) => {
      return TLeaderboard.findOne({ _id: leaderboardId });
    },
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);

      return { token, user };
    },
    addLeaderboard: async (parent, { score }, context) => {
      if (context.user) {
        const leaderboard = await Leaderboard.create({
          score,
          leaderboardUser:context.user.username});

        await User.findByIdAndUpdate(context.user._id, { $push: { leaderboards: leaderboard._id } });

        return leaderboard;
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

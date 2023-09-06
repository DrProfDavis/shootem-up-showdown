const { Leaderboard, User } = require('../models');

module.exports = {
  // Function to get all of the applications by invoking the find() method with no arguments.
  // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
  async getLeaderboards(req, res) {
    try {
      const leaderboards = await Leaderboard.find();
      res.json(leaderboards);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Gets a single application using the findOneAndUpdate method. We pass in the ID of the application and then respond with it, or an error if not found
  async getSingleLeaderboard(req, res) {
    try {
      const leaderboard = await Leaderboard.findOne({ _id: req.params.leaderboardId });

      if (!leaderboard) {
        return res.status(404).json({ message: 'No leaderboard with that ID' });
      }

      res.json(leaderboard);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Creates a new application. Accepts a request body with the entire Application object.
  // Because applications are associated with Users, we then update the User who created the app and add the ID of the application to the applications array
  async createLeaderboard(req, res) {
    try {
      const leaderboard = await Leaderboard.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { leaderboards: leaderboard._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the leaderboard 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Deletes an application from the database. Looks for an app by ID.
  // Then if the app exists, we look for any users associated with the app based on he app ID and update the applications array for the User.
  async deleteSingleLeaderboard(req, res) {
    try {
      const leaderboard = await Leaderboard.findOneAndRemove({ _id: req.params.leaderboardId });

      if (!leaderboard) {
        return res.status(404).json({ message: 'No leaderboard score with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { leaderboards: req.params.leaderboardId },
        { $pull: { leaderboards: req.params.leaderboardId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'No user with this id!',
        });
      }

      res.json({ message: 'Leaderboard score successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
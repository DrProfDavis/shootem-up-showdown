const router = require('express').Router();
const {
  getLeaderboards,
  getSingleLeaderboard,
  createLeaderboard,
  deleteSingleLeaderboard,
} = require('../../controllers/appController');

// /api/leaderboards
router.route('/')
// GET all leadboard scores
.get(getLeaderboards)
// CREATE new leaderboard score
.post(createLeaderboard);

// /api/leaderboards/:leaderboardId
router
  .route('/:leaderboardId')
  // GET a singtle leaderboard score
  .get(getSingleLeaderboard)
  // DELETE a single leaderboard score
  .delete(deleteSingleLeaderboard);


module.exports = router;

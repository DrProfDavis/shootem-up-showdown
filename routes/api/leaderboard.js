const router = require('express').Router();
const {
  getLeaderboards,
  getSingleLeaderboard,
  createLeaderboard,
  deleteLeaderboard,
} = require('../../controllers/appController');

// /api/leaderboards
router.route('/').get(getLeaderboards).post(createLeaderboard);

// /api/leaderboards/:leaderboardId
router
  .route('/:leaderboardId')
  .get(getSingleLeaderboard)
  .delete(deleteLeaderboard);

// /api/leaderboards/:leaderboardId/tags
router.route('/:leaderboardId/tags').post(addTag);

// /api/leaderboards/:leaderboardId/tags/:tagId
router.route('/:leaderboardId/tags/:tagId').delete(removeTag);

module.exports = router;

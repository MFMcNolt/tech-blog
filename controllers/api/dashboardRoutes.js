const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Define routes related to the dashboard

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });
    const postData = await Post.findAll({
      where: {
        user_username: user.username,
      },
    });

    res.render('dashboard', {
      user,
      postData,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add other routes related to the dashboard as needed

module.exports = router;
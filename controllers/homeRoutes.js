const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const helpers = require('../utils/helpers');

// Route to display all posts on the home page
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, attributes: ['comment_text', 'user_id', 'created_at'], include: { model: User, attributes: ['username'] } },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to display a single post by ID
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, attributes: ['comment_text', 'user_id', 'created_at'], include: { model: User, attributes: ['username'] } },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to display the login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// Route to display the signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

// Route to display the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
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

// Route to display the create new post page
router.get('/post/create', withAuth, (req, res) => {
  res.render('post', { createPost: true, logged_in: req.session.logged_in });
});

module.exports = router;
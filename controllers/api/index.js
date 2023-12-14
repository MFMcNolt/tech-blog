const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const dashboardRoutes = require('./dashboardRoutes'); 

router.use('/user', userRoutes);
router.use('/post', this.postRoutes);

module.exports = router;

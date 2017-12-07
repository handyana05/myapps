var express = require('express');
var router = express.Router();

var setupController = require('../controllers/setupController');
var apiController = require('../controllers/apiController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* API Route */
router.route('/api/wishes/:username').get(apiController.getAllWishesByUsername);
router.route('/api/wish/:id').get(apiController.getWishById);
router.route('/api/wish').post(apiController.postWish);
router.route('/api/wish').delete(apiController.deleteWishById);

/* Seed Data into DB */
router.route('/api/setupWishlist').get(setupController.seedDataIntoDb);

module.exports = router;

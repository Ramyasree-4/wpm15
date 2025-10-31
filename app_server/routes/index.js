const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);

// Location info page
router.get('/location/:locationid', ctrlLocations.locationInfo);

// ✅ Add review page with locationid
router.get('/location/:locationid/review/new', ctrlLocations.addReview);

// ✅ Add review page without locationid (works for /location/review/new)
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;

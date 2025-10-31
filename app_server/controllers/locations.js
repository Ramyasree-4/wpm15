const locations = [
  {
    name: 'Starcups',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
    distance: '100m',
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      {
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2024',
        reviewText: 'What a great place! I can’t say enough good things about it.'
      },
      {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2024',
        reviewText: 'It was okay. Coffee could be hotter.'
      }
    ]
  },
  {
    name: 'Cafe Hero',
    address: '22 King Street, Reading, RG6 2DF',
    rating: 4,
    facilities: ['Hot drinks', 'Snacks', 'Wi-Fi'],
    distance: '200m',
    coords: { lat: 51.4559, lng: -0.9704 },
    openingTimes: [
      { days: 'Mon - Fri', opening: '8:00am', closing: '8:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      {
        author: 'Amelia Rose',
        rating: 4,
        timestamp: '20 June 2024',
        reviewText: 'Nice vibe and great service!'
      }
    ]
  },
  {
    name: 'Burger Queen',
    address: '10 Market Road, Reading, RG6 3CD',
    rating: 2,
    facilities: ['Food', 'Premium Wi-Fi'],
    distance: '250m',
    coords: { lat: 51.4568, lng: -0.9721 },
    openingTimes: [
      { days: 'Mon - Fri', opening: '10:00am', closing: '10:00pm', closed: false },
      { days: 'Saturday', opening: '10:00am', closing: '9:00pm', closed: false },
      { days: 'Sunday', opening: '11:00am', closing: '8:00pm', closed: false }
    ],
    reviews: [
      {
        author: 'Ravi Kumar',
        rating: 2,
        timestamp: '2 July 2024',
        reviewText: 'Slow service, but okay food.'
      }
    ]
  }
];
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with Wi-Fi near you!'
    },
    sidebar:
      "Looking for Wi-Fi and a seat? Loc8r helps you find places " +
      "to work when out and about. Perhaps with coffee, cake or a pint? " +
      "Let Loc8r help you find the place you're looking for.",
    locations // Pass the array to the view
  });
};

/* ==================================================
   GET 'Location Info' Page
================================================== */
const locationInfo = (req, res) => {
  const locationId = parseInt(req.params.locationid, 10); // Get :locationid from URL

  // Validate ID (ensure it exists)
  if (isNaN(locationId) || locationId < 0 || locationId >= locations.length) {
    return res.status(404).render('404', { title: 'Location Not Found' });
  }

  const location = locations[locationId]; // Get that specific location

  res.render('location-info', {
    title: `${location.name} - Details`,
    pageHeader: { title: location.name },
    sidebar:
      "Loc8r helps you find places to work with Wi-Fi near you! " +
      "Read reviews, check facilities, and get details before you visit.",
    location
  });
};

/* ==================================================
   GET 'Add Review' Page
================================================== */
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Add Review',
    pageHeader: { title: 'Add your review' }
  });
};

/* ==================================================
   EXPORT CONTROLLERS
================================================== */
module.exports = {
  homelist,
  locationInfo,
  addReview
};

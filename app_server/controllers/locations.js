/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [
      {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
      },
      {
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
      },
      {
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '250m'
      }
    ]
  });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  const locationName = req.params.name;

  const locations = {
    'starcups': {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', opening: '', closing: '', closed: true }
      ],
      reviews: [
        { author: 'Simon Holmes', rating: 3, timestamp: '16 February 2017', reviewText: 'What a great place.' },
        { author: 'Charlie Chaplin', rating: 3, timestamp: '14 February 2017', reviewText: 'It was okay. Coffee wasn\'t great.' }
      ]
    },
    'cafe-hero': {
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '6:00am', closing: '8:00pm', closed: false },
        { days: 'Saturday', opening: '7:00am', closing: '6:00pm', closed: false },
        { days: 'Sunday', opening: '8:00am', closing: '4:00pm', closed: false }
      ],
      reviews: [
        { author: 'Jane Doe', rating: 5, timestamp: '5 February 2017', reviewText: 'Great coffee and atmosphere!' }
      ]
    },
    'burger-queen': {
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '10:00am', closing: '10:00pm', closed: false },
        { days: 'Saturday', opening: '10:00am', closing: '11:00pm', closed: false },
        { days: 'Sunday', opening: '11:00am', closing: '9:00pm', closed: false }
      ],
      reviews: [
        { author: 'John Smith', rating: 2, timestamp: '20 February 2017', reviewText: 'Food was okay, but wifi was slow.' }
      ]
    }
  };

  const location = locations[locationName] || locations['starcups'];

  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: `${location.name} is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.\n\nIf you've been and you like it - or if you don't - please leave a review to help other people just like you.`,
    location: location
  });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  // If you want to display the location ID or name in the form, you can pass it
  const locationId = req.params.locationid || 'none';
  res.render('location-review-form', { 
    title: 'Add review',
    pageHeader: { title: 'Add your review' },
    locationId: locationId
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};

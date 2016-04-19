const placesSuccess = require('./samples/places.json');
const tripsSuccess = require('./samples/trips.json');
module.exports = {
    places: placesSuccess,
    trips: tripsSuccess,
    tripsJ1: {
        error: [{
            code: 'J1',
            type: 'Invalid Parameters',
            message: 'Please provide the `from` parameter'
        }]
    },
    tripsJ9: {
        error: [{
            code: 'J9',
            type: 'Invalid Parameters',
            message: 'The `departure` date cannot occur in a day before today.'
        }]
    }
};

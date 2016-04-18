const fs = require('fs');
const path = require('path');
const nock = require('nock');
const defaultFixtures = require('./defaults');

function getMockContents(filePath){
    let contents;
    try{
        contents = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }catch(e){
        contents = null;
    }
    return contents;
}

const fakeDataDir = process.env.FAKE_DATA_DIR || '../fixtures';

const placesFixturesPath = path.join(__dirname, fakeDataDir, 'places.json');
const placesFixtures = getMockContents(placesFixturesPath);

const tripsQueryErrorJ1 = function(queryObj){
    const result = (queryObj.from === undefined);
    return result;
};
const tripsFixturesJ1Path = path.join(__dirname, fakeDataDir, 'trips-error-j1.json');
const tripsFixturesJ1 = getMockContents(tripsFixturesJ1Path);

const tripsQueryErrorJ9 = function(queryObj){
    const dayString = queryObj.departure; //yyyy-mm-dd
    const day = new Date(dayString + 'T00:00:00-03:00');
    const today = new Date(new Date().toISOString().slice(0,10) + 'T00:00:00-03:00');
    const result = (day.getTime() < today.getTime());
    return result;
};
const tripsFixturesJ9Path = path.join(__dirname, fakeDataDir, 'trips-error-j9.json');
const tripsFixturesJ9 = getMockContents(tripsFixturesJ9Path);

const tripsFixturesPath = path.join(__dirname, fakeDataDir, 'trips.json');
const tripsFixtures = getMockContents(tripsFixturesPath);


const fake = [
    {
        path: '/places',
        verb: 'GET',
        query: true,
        reply: [
            200,
            placesFixtures || defaultFixtures.places
        ]
    },
    {
        path: '/trips',
        verb: 'GET',
        query: tripsQueryErrorJ1,
        reply: [
            400,
            tripsFixturesJ1 || defaultFixtures.tripsJ1
        ]
    },
    {
        path: '/trips',
        verb: 'GET',
        query: tripsQueryErrorJ9,
        reply: [
            400,
            tripsFixturesJ9 || defaultFixtures.tripsJ9
        ]
    },
    {
        path: '/trips',
        verb: 'GET',
        query: true,
        reply: [
            200,
            tripsFixtures || defaultFixtures.trips
        ]
    }
];
const fakeScope = (url) => {
    const scope = nock(url);
    fake.forEach((endpoint) => {
        const { path, verb, query, reply } = endpoint;
        scope.intercept(path, verb)
            .query(query)
            .reply(...reply);
    })
}
module.exports = fakeScope;

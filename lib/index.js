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
const placesFixturesPath = path.join(__dirname, fakeDataDir, 'places1.json');
const placesFixtures = getMockContents(placesFixturesPath);

const fake = [
    {
        path: '/places',
        verb: 'GET',
        reply: [
            200,
            placesFixtures || defaultFixtures.places
        ]
    }
];
const fakeScope = (url) => {
    const scope = nock(url);
    fake.forEach((endpoint) => {
        const { path, verb, reply } = endpoint;
        scope.intercept(path, verb).reply(...reply);
    })
}
module.exports = fakeScope;

#!harmony

const request = require('request');
const fakeClickBus = require('./lib');

const CLICKBUS_URL = process.env.CLICKBUS_URL || 'https://api-evaluation.clickbus.com.br/api/v1';
fakeClickBus(CLICKBUS_URL);

const getFirstItem = (body) => (JSON.parse(body).items[0]);

request(`${CLICKBUS_URL}/places`, (error, response, body) => {
    console.log(getFirstItem(body));
});

request(`${CLICKBUS_URL}/trips`, (error, response, body) => {
    console.log(body);
});

request(`${CLICKBUS_URL}/trips?from=sao-paulo-tiete-sp&departure=2015-01-01`,
    (error, response, body) => {
        console.log(body);
    }
);

const today = new Date().toISOString().slice(0, 10);
request(`${CLICKBUS_URL}/trips?from=sao-paulo-tiete-sp&departure=${today}`,
    (error, response, body) => {
        console.log(getFirstItem(body));
    }
);

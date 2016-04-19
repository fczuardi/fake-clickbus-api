#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" --harmony_destructuring --harmony_sloppy_let "$0" "$@"

const request = require('request');
const fakeClickBus = require('./lib');

const CLICKBUS_URL = process.env.CLICKBUS_URL || 'https://api-evaluation.clickbus.com.br/api/v1';
fakeClickBus(CLICKBUS_URL);

// request(CLICKBUS_URL + '/places', function (error, response, body) {
//     console.log(response.body)
// });

// request(CLICKBUS_URL + '/trips', function (error, response, body) {
//     console.log(response.body)
// });

// request(CLICKBUS_URL + '/trips?from=sao-paulo-tiete-sp&departure=2015-01-01',
//     function (error, response, body) {
//         console.log(response.body)
//     }
// );

const today = new Date().toISOString().slice(0, 10);
request(`${CLICKBUS_URL}/trips?from=sao-paulo-tiete-sp&departure=${today}`,
    (error, response, body) => {
        console.log(body);
    }
);

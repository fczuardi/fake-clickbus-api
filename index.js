#!/bin/sh
':' //; exec "$(command -v nodejs || command -v node)" --harmony_destructuring --harmony_sloppy_let "$0" "$@"

const request = require('request');
const fakeClickBus = require('./lib');

const CLICKBUS_URL = process.env.CLICKBUS_URL || 'https://api-evaluation.clickbus.com.br/api/v1';
const scope = fakeClickBus(CLICKBUS_URL);

request(CLICKBUS_URL + '/places', function (error, response, body) {
    console.log(response.body)
});

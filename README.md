[![Build Status](https://travis-ci.org/fczuardi/fake-clickbus-api.svg?branch=master)](https://travis-ci.org/fczuardi/fake-clickbus-api)
[![Build Status](https://semaphoreci.com/api/v1/fczuardi/fake-clickbus-api/branches/master/badge.svg)](https://semaphoreci.com/fczuardi/fake-clickbus-api)
[![Code Climate](https://codeclimate.com/github/fczuardi/fake-clickbus-api/badges/gpa.svg)](https://codeclimate.com/github/fczuardi/fake-clickbus-api)
[![bitHound Overall Score](https://www.bithound.io/github/fczuardi/fake-clickbus-api/badges/score.svg)](https://www.bithound.io/github/fczuardi/fake-clickbus-api)
[![Codeship Status for fczuardi/fake-clickbus-api](https://codeship.com/projects/eb40c3a0-e886-0133-0286-429aaf3cc23f/status?branch=master)](https://codeship.com/projects/147266)

# fake-clickbus-api
A mock to test api requests and responses in the format described at http://docs.clickbus.com.br/

## Install
```shell
npm i -D fake-clickbus-api
```

## Usage

```javascript
const request = require('request');
const fakeClickBus = require('fake-clickbus-api');

const CLICKBUS_URL = process.env.CLICKBUS_URL ||
        'https://api-evaluation.clickbus.com.br/api/v1';
const scope = fakeClickBus(CLICKBUS_URL);

request(CLICKBUS_URL + '/places', function (error, response, body) {
    console.log(response.body)
});

```

## Contributing

### non-npm requirements

- [jq][jq]

### install

```shell
git clone https://github.com/fczuardi/fake-clickbus-api.git
npm install
```

### populate fixtures

You might want to grab the real output from the actual API to populate the
cached output of your fake mocked API. To do that use the tasks below:

#### places

```
npm run data:places
```

#### trips

```
npm run data:trips
```

### Todo

- Currently the scripts to populate fixtures with real outputs are not available
to the package distributed on npm. Maybe I'll include those shell scripts with
the distribution later.
- Currently only some endpoints are mocked: ```places``` and ```trips```.

[jq]: https://stedolan.github.io/jq/

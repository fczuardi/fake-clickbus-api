[![Build Status](https://semaphoreci.com/api/v1/fczuardi/fake-clickbus-api/branches/master/badge.svg)](https://semaphoreci.com/fczuardi/fake-clickbus-api)

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

# fake-clickbus-api
A mock to test api requests and responses in the format described at http://docs.clickbus.com.br/

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

[jq]: https://stedolan.github.io/jq/

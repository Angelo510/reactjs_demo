# Zilly Whisker

testtest

### How to run locally?

1. Clone git repository to your local directory.
2. Go to your local directory on console(terminal) and run `npm install`
3. Configure your settings on `config/config.js`
4. set `CURRENT_OPERATION` environment variable for operation type and run `npm start`.
For example,
`export CURRENT_OPERATION=ImportPublicRecords`
`npm start`

 Possible values for `CURRENT_OPERATION` environment variable are;
 `ImportPublicRecords`, `ImportMLSRecords`, `ImportOldRecords`, `ImportZillowRecords`, `GenerateFullPropertyJSON`, `GenerateSearchPropertyJSON`
** NOTE
Please delete all files in /mongo/jsonfiles/ (set in config.js file) before you run `GenerateFullPropertyJSON` and `GenerateSearchPropertyJSON` operations

### Node Packages Used

1. Babel - for ES6 & ES7 compilation

2. bluebird - for Promise

3. mongoose - for Database
mongoose-model-update
mongoose-timestamp

4. lodash - for Array handling

5. moment - for DateTime conversion

6. mocha and chai - for test
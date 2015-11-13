var request = require('superagent');
var prefix = require('superagent-prefix')('static');

// Get static/data.json
request.get('/data.json')
  .use(prefix)
  .end(function () {
    console.log(arguments);
  });

// Get static/other-data.json
request.get('/other-data.json')
  .use(prefix)
  .end(function () {
    console.log(arguments);
  });

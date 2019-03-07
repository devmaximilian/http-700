let Http700 = require('../');
let response = require('./mocks').express.response;

Object.entries(Http700.status).forEach(status => {
  let value = Http700.setFor(response, status[0]);

  if (value != status[1]) {
    throw new Error('Invalid response text');
  }
});

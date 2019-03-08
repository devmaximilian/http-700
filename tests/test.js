let http700 = require('../');
let response = require('./mocks').express.response;

Object.entries(http700.status).forEach(status => {
  http700.setFor(response, status[0]);

  if (response.statusMessage != status[1]) {
    throw new Error('Test failed');
  }
});

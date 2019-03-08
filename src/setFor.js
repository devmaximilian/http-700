let setFor = (response, status) => {
  response.statusMessage = require('./status')[status];
  response.status(status);
};

module.exports = setFor;

let setFor = (response, status) => {
  return response.status(status).send(require('./status')[status]);
};

module.exports = setFor;

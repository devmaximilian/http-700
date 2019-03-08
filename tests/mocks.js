module.exports = {
  express: {
    response: {
      statusMessage: '',
      status: code => {
        console.log(`Set status code ${code}`);
      }
    }
  }
};

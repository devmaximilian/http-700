module.exports = {
  express: {
    response: {
      status: code => {
        console.log(`Sent status code ${code}`);
        return {
          send: text => {
            console.log(`Sent response ${text}`);
            return text;
          }
        };
      }
    }
  }
};

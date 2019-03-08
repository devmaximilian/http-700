# HTTP 700

Based on [this](https://github.com/joho/7XX-rfc) fantastic RFC proposal. Intended for use with express.

### Example usage

A basic usage example.

```javascript
const express = require('express');
const http700 = require('http-700');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  http700.setFor(res, 701);
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
```

**NOTE**: Make sure to send a response (as this package does **not** do that automatically).

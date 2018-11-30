const express = require('express'),
      app = express(),
      port = 3000;

app.get('/', (req, res) => res.sendfile('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
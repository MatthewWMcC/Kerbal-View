const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.static('images'));

const server = app.listen(port, () => {
    console.log('server is running on port ' + port);
});

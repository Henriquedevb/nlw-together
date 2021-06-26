const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(3000, () => {
    console.log('Server run');
});
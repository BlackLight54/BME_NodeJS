const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const port = 80;
const dev = false;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//  app.use(helmet({
//  }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser())

app.use(express.static('static'));


// Load routing
require('./route/index.js')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});




app.listen(port, function () {
    console.log(`On port: ${port}`);
})

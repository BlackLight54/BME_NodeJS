const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const port = 80;
const dev = false;

app.use(express.static('static'));
app.use('/node_modules/', express.static('node_modules'));

app.set('view engine', 'ejs');
//  app.use(helmet({
//  }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.use(express.static('static'));
app.use("/", (req, res) => {
    res.redirect('/cars.html')
});
app.use((req, res) => {
    res.status(404).send('404');
});







app.listen(port, function () {
    console.log(`On port: ${port}`);
});

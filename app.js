const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express('');

const testRoutes = require('./routes/test');
const farionRoutes = require('./routes/farion');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/test', testRoutes);
app.use(farionRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,' ../' , 'views', 'test.html'))
})

app.listen(3000);
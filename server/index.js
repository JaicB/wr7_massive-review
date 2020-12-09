require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive')

const controller = require('./controller');

const { CONNECTION_STRING } = process.env;

app.use(express.json());


app.get('/api/stuff', controller.getStuff)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    console.log('DB is up!')
    app.set('db', dbInstance)

    app.listen(5050, () => console.log('Server is up!'))
})








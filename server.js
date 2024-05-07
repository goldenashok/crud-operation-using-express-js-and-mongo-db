const express = require('express');
const dotEnv = require('dotenv');
const Dbconect = require('./src/db/db');
const app = express();
dotEnv.config();

app.get('/', (req, res) => {
 res.send('Initial running');
});

app.get('/test',(req, res) => {
    console.log('Ashok', Dbconect.admin.find());
});

app.listen(process.env.PORT, () => {
    console.log(`Server running http://localhost:${process.env.PORT}`);
});

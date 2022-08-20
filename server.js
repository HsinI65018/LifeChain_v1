const express = require('express');
const render = require('./router/render');
const data = require('./router/data');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.json());

app.use('/', render);
app.use('/api/data', data);


const PORT = '3000';
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log('server listening at port 3000...');
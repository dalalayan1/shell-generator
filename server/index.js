import express from 'express';
import webpack from 'webpack';

const render = require('../dist/SSR.js');
const app = express();
console.log('ren ',render);
app.get('/', render.default);

const port = 3001;
app.listen(port);
console.log(`Listening on port ${port}`);

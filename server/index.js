import express from 'express';
import webpack from 'webpack';

const render = require('../dist/output_SSR.js');
const app = express();
console.log('ren ',render);
app.get('/', render.default);

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);

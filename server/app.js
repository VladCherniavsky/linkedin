/**
 * Created by vlad on 11.1.17.
 */

import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import https from 'https';
import config from './config'


import routers from './routers';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api', routers);

global._root = __dirname;

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
https.createServer(options, app)
    .listen(config.get('port'), () => {console.log(`Server listening on port ${config.get('port')}`);});

/**
 * Created by vlad on 11.1.17.
 */

import express from 'express';
import express from 'aws-sdk';

const app = express();

global._root = __dirname;
app.listen(3000, () => {console.log('Server listening on port 3000');});
/**
 * Created by vlad on 12.1.17.
 */
import nconf from 'nconf';
import path from 'path';
nconf.argv()
    .env()
    .file({file: path.join(__dirname, 'config.json')});

export default nconf;
/**
 * Created by vlad on 12.1.17.
 */
import * as dynamoLib from '../libs/dynamoDb';
import config from '../config';
import models from '../models';

dynamoLib
    .listTables()
    .then(gotTableNames)
    .catch(console.error);

function gotTableNames(data) {
    return data.TableNames.includes(config.get('tables:users'))
        ? console.log('Table esixt', config.get('tables:users'))
        : init();
}

function init() {
    dynamoLib
        .createTable(models[config.get('tables:users')])
        .then((data) => {console.log('data', data);})
        .catch(console.error)
}

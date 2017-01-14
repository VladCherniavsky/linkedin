/**
 * Created by vlad on 12.1.17.
 */
import config from '../config';
import {deleteEmptyField} from '../libs/common'
import {connection} from '../libs/mysql'

function saveContact(req, res, next) {
    //const parsedContact = deleteEmptyField(JSON.parse(req.body['contact']));
    console.log('eeeee', config.get('tables:contacts') + Date.now());
    connection.query('INSERT INTO ' + config.get('tables:users') + ' SET ?', {email: req.body.email}, (err, result) => {
        if (err) {
            console.error('err', err);
        } else {
            console.log('result', result);
            res.json(result);
        }


    });

}

function getAll(req, res, next) {
    connection.query('SELECT * FROM ' + config.get('tables:users'), (err, result) => {
        if (err) {
            console.error('err', err);
        } else {
            console.log('result', result);
            res.json(result);
        }


    });
}

export {
    saveContact,
    getAll
}
/**
 * Created by vlad on 14.1.17.
 */
import mysql from 'mysql';
import config from '../config';


var connection = mysql.createConnection({
    host     : config.get('db:host'),
    user     : config.get('db:user'),
    password : config.get('db:password'),
    database : config.get('db:database')

});


function connect() {
    return new Promise((resolve, reject) => {
        connection.connect(function(err, data) {
           return err ? reject(err) : resolve(data);
        });

    });
}

export {
    connect,
    connection
}
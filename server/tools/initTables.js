/**
 * Created by vlad on 12.1.17.
 */
import * as mysql from '../libs/mysql';
import config from '../config';

const dbName = config.get('db:database');
const createTableQueries = {
    [config.get('tables:users')]: 'CREATE TABLE Users (id INT(100) NOT NULL AUTO_INCREMENT, email TINYTEXT, PRIMARY KEY(id))',
    [config.get('tables:contacts')]: 'CREATE TABLE Contacts (id INT(100) NOT NULL AUTO_INCREMENT, userEmail TINYTEXT, link TINYTEXT, creationTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))'
};

mysql
    .connect()
    .then(onConnect)
    .catch(console.error);

function onConnect() {

    return Object.keys(config.get('tables')).forEach((tableName) => {

        return mysql.connection.query(getCheckTableQuery(dbName, config.get('tables:' + tableName)), function(err, data) {
            return err ? console.error(err) : onData(data);

            function onData(data) {
                if ( data.length > 0) {
                    console.log('Table Exist', data);
                    console.log('DELETING-----------------------------------------');
                    mysql.connection.query('DROP TABLE ' + config.get('tables:' + tableName), (err, deleted) => {
                        if (err) {
                            console.error('err', err);
                        } else {
                            console.log('deleted', deleted);
                        }
                    })
                } else {
                    console.log('Create table:', config.get('tables:' + tableName));
                    mysql.connection.query(createTable(tableName), (err, createdTable)=> {
                        if (err) {
                            console.error('err', err);
                        } else {
                            console.log('createdTable', createdTable);
                        }
                    });
                }

                setTimeout(()=> {
                    process.exit();
                }, 3000)

            }
        });
    });
}

function getCheckTableQuery(database, tableName) {
    return 'SELECT * FROM information_schema.tables ' +
        'WHERE table_schema = \'' + database + '\' ' +
        'AND table_name = \'' + tableName + '\' LIMIT 1;'
}

function createTable(table) {
    return createTableQueries[config.get('tables:' + table)];
}


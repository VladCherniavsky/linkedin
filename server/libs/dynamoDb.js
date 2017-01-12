/**
 * Created by vlad on 12.1.17.
 */

import AWS from 'aws-sdk';

AWS.config.update({region:'us-east-1'});
AWS.config.setPromisesDependency(Promise);

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

function listTables(params) {
    params = params ||  {ExclusiveStartTableName: 'STRING_VALUE', Limit: 100};

    return dynamodb
        .listTables(params)
        .promise();
}

function deleteTable(params) {
    dynamodb.deleteTable(params, function(err, data) {
        return err ? console.log(err, err.stack) : console.log(data);
    });
}

function createTable(params) {
    return dynamodb.createTable(params).promise();
}

function putItem(params) {
    return docClient.put(params).promise();
}

export {
    deleteTable,
    listTables,
    createTable,
    putItem
};
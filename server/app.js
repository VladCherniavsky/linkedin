/**
 * Created by vlad on 11.1.17.
 */

//import express from 'express';
import AWS from 'aws-sdk';

AWS.config.update({region:'us-east-1'});

var dynamodb = new AWS.DynamoDB();

var params = {
    ExclusiveStartTableName: 'STRING_VALUE',
    Limit: 100
};
dynamodb.listTables(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});

/*
global._root = __dirname;
app.listen(3000, () => {console.log('Server listening on port 3000');});*/

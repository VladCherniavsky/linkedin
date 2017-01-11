/**
 * Created by vlad on 1/11/2017.
 */
import AWS from 'aws-sdk';

AWS.config.update({region:'us-east-1'});

/*var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: "Users_E",
        Item: {
            'email': 56225,
            "title": 'jjjjj'
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add movie",err);
        } else {
            console.log("PutItem succeeded:", data);
        }
    });*/


/*var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: "Movies",
        Item: {
            "year":  2013,
            "title": 'jhnnn',
            "info":  ['hbb', 'jnnnn']
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add movie", err);
        } else {
            console.log("PutItem succeeded:", data);
        }
    });*/


var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "Users",
    ProjectionExpression: "#yr",
    ExpressionAttributeNames: {
        "#yr": "email",
    }
};

docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the movies
        console.log("Scan succeeded.", data);
    }
}
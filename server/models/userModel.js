/**
 * Created by vlad on 12.1.17.
 */
export default  {
    TableName : "Users",
    KeySchema: [
        { AttributeName: "userEmail", KeyType: "HASH"},  //Partition key
        { AttributeName: "timeStamp", KeyType: "RANGE" },  //Sort key
        { AttributeName: "contactId", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "contactId", AttributeType: "N" },
        { AttributeName: "userEmail", AttributeType: "S" },
        { AttributeName: "timeStamp", AttributeType: "N" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};
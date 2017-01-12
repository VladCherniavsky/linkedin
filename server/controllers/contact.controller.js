/**
 * Created by vlad on 12.1.17.
 */
import {putItem} from '../libs/dynamoDb'
import config from '../config';
import {deleteEmptyField} from '../libs/common'

function saveContact(req, res, next) {
    const parsedContact = deleteEmptyField(JSON.parse(req.body['contact']));

    const params = {
        TableName: config.get('tables:users'),
        Item: {
            userEmail: 'vvvvvvvv',
            contactId: 12345645,
            contact: parsedContact
        },
        ReturnValues: 'ALL_OLD'
    };

    return putItem(params)
        .then((saved) => {res.json(saved);})
        .catch(console.error);
}

export {
    saveContact
}
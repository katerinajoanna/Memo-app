const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');


exports.handler = async (event) => {
    try {
        const id = event.pathParameters.id;

        const data = await db.get({
            TableName: 'Messages',
            Key: {
                id: id
            }
        });

        if (!data.Item) {
            return sendResponse(404, { message: 'No messages found' });
        }

        return sendResponse(200, data.Item);
    } catch (error) {
        console.error('Error fetching messages:', error);
        return sendError(500, 'A server error occurred!');
    }
};

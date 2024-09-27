const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');


exports.handler = async (event) => {
  try {
    const data = await db.scan({
      TableName: 'Messages',
    });

    const messages = data.Items;

    if (!messages || messages.length === 0) {
      return sendResponse(404, { message: 'No messages found' });
    }

    return sendResponse(200, messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return sendError(500, 'A server error occurred!');
  }
};


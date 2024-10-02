const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event)); // Loguj event
  const { message } = JSON.parse(event.body);
  console.log("Parsed message: ", message);
  const { id } = event.pathParameters;
  console.log("Message ID: ", id);

  if (!message) {
    return sendError(400, 'Invalid input: message is required');
  }

  try {
    const result = await db.update({
      TableName: 'Messages',
      Key: { id: id },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set message = :message',
      ExpressionAttributeValues: {
        ':message': message,
      }

    });
    console.log("Update Result: ", result);

    return sendResponse(200, { success: true, message: 'Message updated successfully' });

  } catch (error) {
    console.error("Error updating message:", error);

    return sendError(500, { success: false, message: error.message });
  }
};



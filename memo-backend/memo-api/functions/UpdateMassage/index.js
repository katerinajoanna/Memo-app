const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

exports.handler = async (event) => {
  console.log("Event:", JSON.stringify(event)); // Loguj event
  const { text } = JSON.parse(event.body);
  console.log("Parsed text: ", text);
  const { id } = event.pathParamet
  ers;
  console.log("Message ID: ", id);

  if (!text) {
    return sendError(400, 'Invalid input: text is required');
  }

  try {
    const result = await db.update({
      TableName: 'Messages',
      Key: { id: id },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set text = :text',
      ExpressionAttributeValues: {
        ':text': text,
      }

    });
    console.log("Update Result: ", result);

    return sendResponse(200, { success: true, message: 'Message updated successfully' });

  } catch (error) {

    return sendError(500, { success: false, message: error.message });
  }
};



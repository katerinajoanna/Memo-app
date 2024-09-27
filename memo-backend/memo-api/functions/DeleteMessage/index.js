const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

exports.handler = async (event) => {
  const { id } = event.pathParameters;

  try {
    const deleteResult = await db.delete({
      TableName: 'Messages',
      Key: { id }
    });

    console.log('Delete result:', deleteResult);

    if (!deleteResult) {
      return sendError(404, 'Message not found');
    }

    return sendResponse(200, { success: true, message: `Message with ID ${id} deleted successfully` });
  } catch (error) {
    console.error('Error deleting message:', error);
    return sendError(500, 'An error occurred while deleting the message');
  }

};

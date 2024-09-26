const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');




exports.handler = async (event) => {
  try {
    const id = event.pathParameters.id; // Pobieramy id z parametrów ścieżki
    const { Item } = await db.get({
      TableName: 'Messages',
      Key: {
        id: id // Użyj id z pathParameters
      }
    });

    if (!Item) {
      return sendResponse(404, { message: 'Du har inga meddelanden att visa.' })
    }
    return sendResponse(200, Item);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return sendError(500, 'A server error occurred!');
  }
};

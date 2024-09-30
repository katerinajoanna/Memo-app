const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');

// Funkcja generująca losowy ciąg znaków o podanej długości
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const { username, message } = body;

    if (!username || !message || !date) {
      return sendError(400, 'Missing required fields');
    }

    const id = generateRandomString(8);
    const date = new Date().toISOString();    // generuj date w backend

    await db.put({
      TableName: 'Messages',
      Item: {
        id: id,
        username: username,
        message: message,
        date: date
      }
    });

    return sendResponse(201, { message: 'Message added successfully' });
  } catch (error) {
    console.error('Error adding message:', error);
    return sendError(500, 'Internal Server Error');
  }
};


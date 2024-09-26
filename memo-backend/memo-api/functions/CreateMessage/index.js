const { sendResponse, sendError } = require('../../responses/index');
const { db } = require('../../services/index');
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body); // Parsuj ciało żądania

    const { username, message, date } = body; // Wyciągnij dane z body

    // Upewnij się, że wszystkie wymagane pola są obecne
    if (!username || !message || !date) {
      return sendError(400, 'Missing required fields');
    }

    // Generuj unikalny identyfikator
    const id = uuidv4();
    // Dodaj nową wiadomość do bazy danych
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


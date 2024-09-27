/*
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';
import { useNavigate } from 'react-router-dom';


function App() {
  const [messages, setMessages] = useState([]);   // Status som lagrar den aktuella listan med meddelanden
  const navigate = useNavigate();

  //Funktion att hämta meddelanden från backend
  const getMessages = () => {
    axios.get('https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Det gick inte att hämta meddelanden', error)
      });
  };

  // useEffect för att hämta meddelanden efter att komponenten har laddats
  useEffect(() => {
    getMessages();
  }, []);

  // Funktion för att lägga till ett nytt meddelande
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Funktion för att radera meddelanden
  const removeMessage = (id) => {

    console.log('Usuwanie wiadomości o ID:', id); // Logowanie ID wiadomości przed usunięciem

    axios.delete(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${id}`)
      .then(() => {
        console.log(`Message with ID ${id} has been removed.`); // Logowanie po pomyślnym usunięciu

        // Aktualizujemy stan lokalny
        setMessages((prevMessages) => {
          const updatedMessages = prevMessages.filter(msg => msg.id !== id);
          console.log('Zaktualizowane wiadomości:', updatedMessages); // Logowanie zaktualizowanej listy
          return updatedMessages;
        });

        // Przekierowujemy na stronę główną
        navigate('/');
      })
      .catch((error) => {
        console.error('Nie udało się usunąć wiadomości', error);
      });
  };


  // Funktion för att uppdatera meddelanden i listan
  //const handleEditMessage = (msgToEdit) => {
  // console.log('Edit message:', msgToEdit);

  // setMessages((prevMessages) =>
  // prevMessages.map((msg) =>
  //   msg.id === msgToEdit.id ? { ...msg, ...msgToEdit } : msg
  // )
  // );
  //}

  // Funkcja do aktualizacji wiadomości
  const updateMessage = (updatedMessage) => {
    axios.put(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${updatedMessage.id}`, {
      text: updatedMessage.text
    })
      .then((response) => {
        console.log('Wiadomość zaktualizowana:', response.data);
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === updatedMessage.id ? { ...msg, text: updatedMessage.text } : msg
          )
        );
      })
      .catch((error) => {
        console.error('Nie udało się zaktualizować wiadomości', error);
      });
  };

  // Funkcja do edytowania wiadomości
  const handleEditMessage = (msgToEdit) => {
    console.log('Edytowanie wiadomości:', msgToEdit);
    updateMessage(msgToEdit); // Wywołanie updateMessage zamiast aktualizowania lokalnie
  };


  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path='/' element={<FlowPage messages={messages} onAddMessage={addMessage} onRemoveMessage={removeMessage} onEdit={handleEditMessage} />} />
          <Route path='/message' element={<WriteMsgPage onAddMessage={addMessage} />} />
          <Route path='/removed' element={<RemovedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
*/


import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';
import { useNavigate } from 'react-router-dom';

function App() {
  const [messages, setMessages] = useState([]);   // Status som lagrar den aktuella listan med meddelanden
  const navigate = useNavigate();

  // Funkcja do pobierania wiadomości
  const getMessages = () => {
    axios.get('https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Det gick inte att hämta meddelanden', error);
      });
  };

  // useEffect do pobierania wiadomości po załadowaniu komponentu
  useEffect(() => {
    getMessages();
  }, []);

  // Funkcja do dodawania wiadomości
  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Funkcja do usuwania wiadomości
  const removeMessage = (id) => {
    console.log('Usuwanie wiadomości o ID:', id);

    axios.delete(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${id}`)
      .then(() => {
        console.log(`Message with ID ${id} has been removed.`);
        setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== id));
        navigate('/');
      })
      .catch((error) => {
        console.error('Nie udało się usunąć wiadomości', error);
      });
  };

  // Funkcja do aktualizacji wiadomości
  const updateMessage = (updatedMessage) => {
    axios.put(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${updatedMessage.id}`, {
      text: updatedMessage.text
    })
      .then((response) => {
        console.log('Wiadomość zaktualizowana:', response.data);
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === updatedMessage.id ? { ...msg, text: updatedMessage.text } : msg
          )
        );
      })
      .catch((error) => {
        console.error('Nie udało się zaktualizować wiadomości', error);
      });
  };

  // Funkcja do edytowania wiadomości
  const handleEditMessage = (msgToEdit) => {
    console.log('Edytowanie wiadomości:', msgToEdit);
    updateMessage(msgToEdit); // Wywołanie updateMessage zamiast aktualizowania lokalnie
  };




  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path='/' element={<FlowPage messages={messages} onAddMessage={addMessage} onRemoveMessage={removeMessage} onEdit={handleEditMessage} />} />
          <Route path='/message' element={<WriteMsgPage onAddMessage={addMessage} />} />
          <Route path='/removed' element={<RemovedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

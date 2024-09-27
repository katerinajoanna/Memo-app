import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';

function App() {
  const [messages, setMessages] = useState([]);   // Status som lagrar den aktuella listan med meddelanden

  //Funktion att hämta meddelanden från backend
  const getMessages = () => {
    axios.get('https://5g9viuqcgg.execute-api.eu-north-1.amazonaws.com/api/messages')
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
    const removedMessage = messages.find(msg => msg.id === id);
    if (removedMessage) {
      setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== id));
    }
  };

  // Funktion för att uppdatera meddelanden i listan
  const handleEditMessage = (msgToEdit) => {
    console.log('Edit message:', msgToEdit);

    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === msgToEdit.id ? { ...msg, ...msgToEdit } : msg
      )
    );
  }

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

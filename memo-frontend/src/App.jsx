import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';

function App() {
  const [messages, setMessages] = useState([]);      // Status som lagrar den aktuella listan med meddelanden
  const [removedMessages, setRemovedMessages] = useState([]);    // Status för lagring av raderade meddelanden

  //Funktion att hämta meddelanden från backend
  const getMessages = () => {
    axios.get('https://5g9viuqcgg.execute-api.eu-north-1.amazonaws.com/messages')
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
    setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== id));

    // Hittar raderat meddelande baserat på id
    const removedMessage = messages.find(msg => msg.id === id);
    if (removedMessage) {
      setRemovedMessages((prevRemoved) => [...prevRemoved, removedMessage]);
    }
  };

  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path='/' element={<Navigate to="/messages" replace />} />
          <Route path='/messages' element={<FlowPage messages={messages} onAddMessage={addMessage} onRemoveMessage={removeMessage} />} />
          <Route path='/message' element={<WriteMsgPage onAddMessage={addMessage} />} />
          <Route path='/removed' element={<RemovedPage removedMessages={removedMessages} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


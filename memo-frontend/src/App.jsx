import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';

function App() {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    axios.get('https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Det gick inte att hämta meddelanden', error);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const removeMessage = (id) => {
    axios.delete(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${id}`)
      .then(() => {
        setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== id));
      })
      .catch((error) => {
        console.error('Nie udało się usunąć wiadomości', error);
      });
  };

  const updateMessage = (updatedMessage) => {
    axios.put(`https://30k8uadsyf.execute-api.eu-north-1.amazonaws.com/api/message/${updatedMessage.id}`, {
      text: updatedMessage.text
    })
      .then(() => {
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

  return (
    <Router>
      <div className="app">
        <Logo />
        <Routes>
          <Route path='/' element={<FlowPage messages={messages} onAddMessage={addMessage} onRemoveMessage={removeMessage} onEdit={updateMessage} />} />
          <Route path='/message' element={<WriteMsgPage onAddMessage={addMessage} />} />
          <Route path='/removed' element={<RemovedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

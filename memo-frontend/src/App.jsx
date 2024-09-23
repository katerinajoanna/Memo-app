import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import FlowPage from './pages/flowPage/FlowPage';
import WriteMsgPage from './pages/writeMsgPage/WriteMsgPage';
import RemovedPage from './pages/removedPage/RemovedPage';
import Logo from './assets/logo/Logo';

function App() {
  const [messages, setMessages] = useState([]);
  const [removedMessages, setRemovedMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const removeMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter(msg => msg.id !== id));
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
          <Route path='/' element={<FlowPage messages={messages} onAddMessage={addMessage} onRemoveMessage={removeMessage} />} />
          <Route path='/message' element={<WriteMsgPage onAddMessage={addMessage} />} />
          <Route path='/removed' element={<RemovedPage removedMessages={removedMessages} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

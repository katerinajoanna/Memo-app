import './writeMsgPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WriteMsgPage({ onAddMessage }) {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && message.trim()) {
            const newMessage = {
                id: Date.now(),
                username,
                message,
                date: new Date().toISOString(),
            };
            onAddMessage(newMessage);
            navigate('/'); // Gå till FlowPage efter att du har lagt till ditt meddelande
        }
    };

    return (
        <div className="write-page">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Användarnamn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <textarea
                    placeholder="Wpisz wiadomość"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Publicera</button>
            </form>

        </div>
    );
}

export default WriteMsgPage;

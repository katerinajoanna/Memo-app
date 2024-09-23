import './messageForm.css';
import { useState } from 'react';

function MessageForm({ onAddMessage }) {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && message.trim()) {
            const newMessage = {
                id: Date.now(), // Genererar enkelt ID
                username,
                text: message,
                createdAt: new Date().toISOString(),
            };
            onAddMessage(newMessage); // Skickar ett nytt meddelande till den överordnade komponenten
            setUsername('');
            setMessage('');
        }
    };

    // Dynamisk justering av textfältstorlek
    const handleChange = (e) => {
        setMessage(e.target.value);
        e.target.style.height = 'auto'; // Återställ höjd
        e.target.style.height = `${e.target.scrollHeight}px`; // Ställ in höjden på scrollHeight
    };



    return (
        <div className="form-page">
            <form onSubmit={handleSubmit}>

                <textarea
                    placeholder="Skrev meddelande"
                    value={message}
                    onChange={handleChange} // När den ändras anpassas den till texten
                />

                <input
                    type="text"
                    placeholder="Användarnamn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <button type="submit">Publicera</button>

            </form>
        </div>
    );
}

export default MessageForm;

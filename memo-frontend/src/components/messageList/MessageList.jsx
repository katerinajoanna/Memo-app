import './messageList.css';
import MessageItem from '../messageItem/MessageItem';

function MessageList({ messages }) {
    console.log('Wiadomosc do wyswietlenia:', messages);

    return (
        <div className='message-list'>
            {messages.length === 0 ? (
                <div className="message">
                    <p>Du har inga</p>
                    <p>meddelande</p>
                    <p>att visa. </p>
                </div>
            ) : (
                <ul>
                    {messages.map((msg) => (
                        <MessageItem key={msg.id} msg={msg} />
                    ))}
                </ul>
            )}

        </div>
    );
}

export default MessageList;

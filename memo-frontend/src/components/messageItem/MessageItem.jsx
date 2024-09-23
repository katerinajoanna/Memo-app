import './messageItem.css';


function getDayName(date) {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return days[date.getDay()];
}

function MessageItem({ msg }) {
    const messageDate = new Date(msg.createdAt);
    const dayName = getDayName(messageDate);

    return (
        <div className="message-item">
            <div className="message-header">
                <span>{`${dayName}, ${messageDate.toLocaleDateString()} ${messageDate.toLocaleTimeString()}`}</span>
            </div>
            <div className="message-body">
                <p>{msg.text}</p>
            </div>
            <div className="message-footer">
                <span><strong>~ {msg.username}</strong></span>
            </div>

        </div>
    );
}

export default MessageItem;

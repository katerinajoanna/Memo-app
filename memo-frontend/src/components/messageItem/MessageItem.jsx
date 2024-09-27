import './messageItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function getDayName(date) {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    return days[date.getDay()];
}

function MessageItem({ msg, onEdit, onRemove }) {
    console.log('Message data:', msg);

    if (!msg) return null;

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
                <div className="message-actions">
                    <div className="action-left">
                        <button onClick={() => onEdit(msg)}>  {/* OnEdit anropas efter att du klickar på redigera-knappen */}
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </button>
                    </div>
                    <div className="action-right">
                        <button onClick={() => onRemove(msg.id)}>  {/* OnEdit anropas efter att du klickar på redigera-knappen */}
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MessageItem;

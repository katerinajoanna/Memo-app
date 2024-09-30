import './flowPage.css';
import { useState, useEffect } from 'react';
import MessageList from '../../components/messageList/MessageList';
import MessageForm from "../../components/messageForm/MessageForm";
import EditMsgForm from "../../components/editForm/EditMsgForm";
import BtnWrite from '../../components/buttonWrite/BtnWrite';
import { Link, useNavigate } from 'react-router-dom';

function FlowPage({ messages, onAddMessage, onRemoveMessage, onEdit, onFetchMessageById }) {
    const [showForm, setShowForm] = useState(false);
    const [editingMessage, setEditingMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Messages in FlowPage after remove:', messages);
    }, [messages]);

    const handleBtnClick = () => {
        setShowForm(!showForm);
    };

    const handleRemoveMessage = (id) => {
        onRemoveMessage(id);
        navigate('/');
        console.log(`Message with ID ${id} has been removed.`);
    };

    const handleEditMessage = (msg) => {
        onFetchMessageById(msg.id); // Pobierz szczegóły wiadomości przez ID
        setEditingMessage(msg);
    };

    const handleSaveMessage = (updatedMessage) => {
        onEdit(updatedMessage);      // Tillhandahåller ett uppdaterat meddelande
        setEditingMessage(null);      // Stäng redigeringsformuläret
    };

    const handleCancelEdit = () => {
        setEditingMessage(null);       // Avbryt redigering
    };

    return (
        <div className='flow-page'>
            {editingMessage ? (
                <EditMsgForm
                    message={editingMessage}
                    onSave={handleSaveMessage}
                    onCancel={handleCancelEdit}
                />
            ) : (
                <>
                    <MessageList
                        messages={messages}
                        onEdit={handleEditMessage}
                        onRemove={handleRemoveMessage}
                    />
                    {showForm ? (
                        <MessageForm onAddMessage={onAddMessage} />
                    ) : (
                        <div className="btn-container">
                            <BtnWrite onClick={handleBtnClick} />
                        </div>
                    )}
                </>
            )}
            <Link to="/removed" className="view-removed-link">
                Removed Messages
            </Link>
        </div>
    );
}

export default FlowPage;

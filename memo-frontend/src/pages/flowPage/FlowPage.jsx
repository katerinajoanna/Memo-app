import './flowPage.css';
import { useState } from 'react';
import MessageList from '../../components/messageList/MessageList';
import MessageForm from "../../components/messageForm/MessageForm";
import BtnWrite from '../../components/buttonWrite/BtnWrite';
import { Link } from 'react-router-dom';

function FlowPage({ messages, onAddMessage }) {
    const [showForm, setShowForm] = useState(false);
    console.log('Show Form:', showForm);

    const handleBtnClick = () => {
        setShowForm(!showForm);  // Genom att klicka på knappen visas/döljer formuläret
    };

    return (
        <div className='flow-page'>
            <MessageList messages={messages} />   {/* Visa meddelandelistan */}

            {showForm ? (
                <MessageForm onAddMessage={onAddMessage} />
            ) : (
                <div className="btn-container">
                    <BtnWrite onClick={handleBtnClick} />
                </div>
            )}
            <Link to="/removed" className="view-removed-link">
                Removed Messages
            </Link>
        </div>
    );
}

export default FlowPage;

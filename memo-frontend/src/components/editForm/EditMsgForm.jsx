import { useState } from 'react';
import './editMsgForm.css';


function EditMsgForm({ message, onSave, onCancel }) {
    const [messageText, setMessageText] = useState(message?.message || ''); // Użyj 'message'

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...message, message: messageText }); // Użyj 'message'
    };

    return (
        <form onSubmit={handleSubmit} className='edit-message-form'>
            <textarea className="edit-textarea"
                value={messageText} // Użyj 'messageText'
                onChange={(e) => setMessageText(e.target.value)}
                required
            />
            <div className="btn-group">
                <button type="submit" className="btn-save">Save</button>
                <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default EditMsgForm;
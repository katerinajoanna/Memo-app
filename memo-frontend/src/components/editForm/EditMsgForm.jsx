import { useState } from 'react';
import './editMsgForm.css';

function EditMsgForm({ message, onSave, onCancel }) {
    const [text, setText] = useState(message?.text || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...message, text }); // Anrop onSave med uppdaterad text
    };

    return (
        <form onSubmit={handleSubmit} className='edit-message-form'>
            <textarea className="edit-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <div className="btn-group">
                <button type="submit" className="btn-save" >Save</button>
                <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default EditMsgForm;

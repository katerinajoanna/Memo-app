import './removedPage.css';
import MessageItem from '../../components/messageItem/MessageItem';
import BtnWrite from '../../components/buttonWrite/BtnWrite';

function RemovedPage({ removedMessages }) {
    return (
        <div className='removed-page'>
            {removedMessages.length === 0 ? (
                <div className="message">
                    <p>Du har inga</p>
                    <p>meddelande</p>
                    <p>att visa. </p>
                </div>
            ) : (
                removedMessages.map((msg) => (
                    <MessageItem
                        key={msg.id}
                        message={msg}
                    />
                ))
            )}

            <div className="footer">
                {/* wstawic fale !!!!!!!!!!! infoga vågor !!!!!!! */}
            </div>

            <div className="btn-container">
                <BtnWrite /> {/* Knapp för att lägga till meddelanden */}
            </div>
        </div>
    );
}

export default RemovedPage;

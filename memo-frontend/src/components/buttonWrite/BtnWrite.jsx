import './btnWrite.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Import ikony ołówka

function BtnWrite() {
    return (
        <Link to="/message" className="btn-write">
            <FontAwesomeIcon icon={faPencilAlt} />  {/* Ikona lub tekst dla przycisku */}
        </Link>
    );
}

export default BtnWrite;

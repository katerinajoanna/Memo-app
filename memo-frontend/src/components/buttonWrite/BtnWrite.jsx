import './btnWrite.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Importera penikonen

function BtnWrite() {
    return (
        <Link to="/message" className="btn-write">
            <FontAwesomeIcon icon={faPencilAlt} />  {/* Ikon för knapp */}
        </Link>
    );
}

export default BtnWrite;

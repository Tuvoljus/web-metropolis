import {useRef, useEffect, useState} from 'react'
import { createPortal } from 'react-dom'

function QSolutions() {
    const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    
      
        
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        
       
        
      
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal")
    );
  } else {
    return null;
  }
};   

}

export default QSolutions;
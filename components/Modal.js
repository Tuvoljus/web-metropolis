import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Image from 'next/image'
import styled from "styled-components"
import styles from '../scss/Portfolio.module.scss'

const Modal = ({ show, onClose, children, title, picture, alt }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [fade, setFade] = useState('');

  useEffect(() => {
    setIsBrowser(true);
  }, []);



  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
     <div tabindex="-1" role="dialog" aria-hidden="true" className={`modal ${styles.modal} show fade`} style={{display: 'block', paddingRight: '17px'}}>
        <div role="document" className={`modal-dialog modal-dialog-scrollable  ${styles.modalDialog}`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <button type="button" data-dismiss="modal" aria-label="Close" onClick={handleCloseClick} className={`${styles.closeButton} btn-close`} >
              <span  aria-hidden="true">
                <i  className="icon-close">
                </i>
              </span>
            </button>            
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="mockup col-lg-6">
                  <div className="device-mockup">
                    <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                      <div className="screen">
                        <Image layout='responsive' src={`${picture}`} width={700} height={700} alt={`${alt}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">                 
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
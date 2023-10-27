import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './styledComponents/Modal.styled';


const modalRoot = document.querySelector('#modal-root');


const Modal = ({onClose, largeImageURL, tags}) => {
 
 

  useEffect(() => {
     const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(); 
      }
  };
    document.body.style.overflow = 'hidden'; 
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'visible';
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);
  
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose(); 
    }
  };

    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot 
    );
  }

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
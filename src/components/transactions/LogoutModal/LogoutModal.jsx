import ReactDOM from 'react-dom';
import styles from './LogoutModal.module.css';

const LogoutModal = ({ onLogout, onCancel }) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.logoBlock}>
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </div>
        <p className={styles.message}>Are you sure you want to log out?</p>
        <div className={styles.buttons}>
          <button className={styles.logout} onClick={onLogout}>
            Log out
          </button>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default LogoutModal;
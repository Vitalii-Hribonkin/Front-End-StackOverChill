import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogoutModal from "../transactions/LogoutModal/LogoutModal";
import { clearUser } from "../../redux/user/userSlice";
import styles from './Header.module.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(state => state.user.username || 'Name');

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Error Exit');
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(clearUser());
      localStorage.clear();
      setShowModal(false);
      navigate('/login');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.userBlock}>
        <span className={styles.username}>{username}</span>
        <button className={styles.exitBtn} onClick={() => setShowModal(true)}>
          <svg className={styles.icon}>
            <use href="/icons.svg#exit" />
          </svg>
          Exit
        </button>
      </div>

      {showModal && (
        <LogoutModal onLogout={handleLogout} onCancel={() => setShowModal(false)} />
      )}
    </header>
  );
};

export default Header;
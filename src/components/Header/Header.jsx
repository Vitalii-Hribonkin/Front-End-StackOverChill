import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LogoutModal from "../transactions/LogoutModal/LogoutModal";
import { clearUser } from "../../redux/user/userSlice";
import styles from './Header.module.css';
import { logout } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/user/userSelectors';
import clsx from 'clsx';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);


  const handleLogout = async () => {
   dispatch(logout())
      dispatch(clearUser());
      setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.headerContainer)}>
        <div className={styles.logoBlock}>
          <img src='/logo.svg' alt='Logo' className={styles.logo} />
        </div>
        <div className={styles.userBlock}>
          <span className={styles.username}>{user.name}</span>
          <button className={styles.exitBtn} onClick={() => setShowModal(true)}>
            <svg className={styles.icon}>
              <use href='/icons.svg#exit' />
            </svg>
            Exit
          </button>
        </div>
        {showModal && (
          <LogoutModal
            onLogout={handleLogout}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
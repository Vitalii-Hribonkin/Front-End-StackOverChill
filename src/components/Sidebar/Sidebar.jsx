import s from './Sidebar.module.css';
import Navigation from '../Navigation/Navigation';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesk = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const balanceFlag = !isTab && location.pathname !== '/';

  return (
    <>
      {!isDesk ? (
        <div className={s.sidebar}>
          <div className={s.wrapper}>
            <Navigation isTab={isTab} />
            {!balanceFlag && <Balance />}
          </div>
          {isTab && <Currency />}
        </div>
      ) : (
        <div className={s.sidebar}>
          <Navigation isTab={isTab} />
          <div className={s.wrapper}>
            <Balance />
            {isTab && <Currency />}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

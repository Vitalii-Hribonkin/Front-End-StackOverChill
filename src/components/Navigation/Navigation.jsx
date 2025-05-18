import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = ({isTab}) => {


  return (
    <nav className={s.navList}>
      <NavLink to='/' className={buildLinkClass}>
        <div className={s.iconContainer}>
          <svg width='38' height='38' className={s.icon}>
            <use href='/icons.svg#home'></use>
            <linearGradient
              id='paint0_linear_12985_3232'
              x1='19'
              y1='0'
              x2='19'
              y2='38'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#355359' />
              <stop offset='1' stopColor='#3B5D63' />
            </linearGradient>
          </svg>
        </div>
        {isTab && 'Home'}
      </NavLink>

      <NavLink to='/statistics' className={buildLinkClass}>
        <div className={s.iconContainer}>
          <svg width='38' height='38' className={s.icon}>
            <use href='/icons.svg#statistics'></use>
          </svg>
        </div>
        {isTab && 'Statistics'}
      </NavLink>
      {!isTab && (
        <NavLink to='/currency' className={buildLinkClass}>
          <div className={s.iconContainer}>
            <svg width='38' height='38' className={s.icon}>
              <use href='/icons.svg#currency'></use>
            </svg>
          </div>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

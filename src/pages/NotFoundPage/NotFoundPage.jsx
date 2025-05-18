import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

// Десктоп
import cat2x from '../../assets/images/notFoundPage/cat_2x.png';
import cat1x from '../../assets/images/notFoundPage/cat_1x.png';

// Планшет
import catTablet2x from '../../assets/images/notFoundPage/cat_tablet_2x.png';
import catTablet1x from '../../assets/images/notFoundPage/cat_tablet_1x.png';

// Мобілка
import catMobile2x from '../../assets/images/notFoundPage/cat_mobile_2x.png';
import catMobile1x from '../../assets/images/notFoundPage/cat_mobile_1x.png';

const NotFoundPage = () => {
  return (
    <div className={s.notfound_wrapper}>
      <div className={s.text_section}>
        <div className={s.glass_box}>
          <div className={s.code}>404</div>
          <h1>СТОРІНКА<br />НЕ ЗНАЙДЕНА</h1>
          <p>Верніться будь ласка на головну сторінку</p>
          <NavLink to="/" className={s.btn}>
            <span>Окак, на головну</span>
          </NavLink>
        </div>
      </div>

      <div className={s.image_section}>
        <div className={s.cat_wrapper}>
          <picture>
            {/* Mobile first */}
            <source
              srcSet={`${catMobile1x} 1x, ${catMobile2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${catTablet1x} 1x, ${catTablet2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${cat1x} 1x, ${cat2x} 2x`}
              media="(min-width: 1280px)"
            />
            <img src={cat2x} alt="Окак" className={s.cat_image} />
          </picture>
          <p className={s.caption}>ОКАК</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
 
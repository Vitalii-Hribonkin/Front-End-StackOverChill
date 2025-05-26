import { NavLink } from 'react-router-dom';
import s from './NotFoundPage.module.css';

// Mobile
import catMobile1x from '../../assets/images/notFoundPage/cat_mobile_1x.webp';
import catMobile2x from '../../assets/images/notFoundPage/cat_mobile_2x.webp';

// Tablet
import catTablet1x from '../../assets/images/notFoundPage/cat_tablet_1x.webp';
import catTablet2x from '../../assets/images/notFoundPage/cat_tablet_2x.webp';

// Desktop
import cat1x from '../../assets/images/notFoundPage/cat_1x.webp';
import cat2x from '../../assets/images/notFoundPage/cat_2x.webp';

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
              type="image/webp"
            />
            <source
              srcSet={`${catTablet1x} 1x, ${catTablet2x} 2x`}
              media="(max-width: 1279px)"
              type="image/webp"
            />
            <source
              srcSet={`${cat1x} 1x, ${cat2x} 2x`}
              media="(min-width: 1280px)"
              type="image/webp"
            />
            <img
              src={catMobile1x}
              alt="Окак"
              className={s.cat_image}
              loading="eager"
            />
          </picture>
          <p className={s.caption}>ОКАК</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

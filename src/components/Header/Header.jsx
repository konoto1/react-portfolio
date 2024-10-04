import { Link } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.headerContainer}>
      <nav>
        <ul className={style.navList}>
          <li><Link to="/react-portfolio/">Home</Link></li>
          <li><Link to="/react-portfolio/about">About</Link></li>
          <li><Link to="/react-portfolio/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

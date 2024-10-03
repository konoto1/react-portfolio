import { Link } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.headerContainer}>
      <nav>
        <ul className={style.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
};

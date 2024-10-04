import { Link } from 'react-router-dom';
import { useState } from 'react';
import style from './Header.module.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={style.headerContainer}>
            <nav className={style.navContainer}>
                <div className={style.hamburger} onClick={toggleMenu}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </div>
                <ul className={`${style.navList} ${menuOpen ? style.showMenu : ''}`}>
                    <li><Link to="/react-portfolio/">Home</Link></li>
                    <li><Link to="/react-portfolio/about">About</Link></li>
                    <li><Link to="/react-portfolio/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    );
};

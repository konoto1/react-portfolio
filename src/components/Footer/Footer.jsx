import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialLinks}>
        <a href="https://www.linkedin.com/in/tomas-konopackis" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/konoto1" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <p>Email: tomas.konopackis@gmail.com</p>
      </div>
      <div className={style.copyright}>
        &copy; {new Date().getFullYear()} Tomas. All rights reserved.
      </div>
    </footer>
  );
};
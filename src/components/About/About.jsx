import style from './About.module.css';
import computer from '/computer.jpg';


export const About = () => {
  return (
    <div className="container">
      <div className={style.aboutContainer}>
        <h2>About Me</h2>
        <div className={style.paragraph}>
          <p className={style.aboutText}>
            Experienced SMT Process Specialist with over 6 years in electronics 
            manufacturing, now transitioning to software development.
            Recently completed a BIT Full-Stack Developer Program, acquiring skills in 
            JavaScript, React, Node.js, HTML/CSS, MySQL, and other modern web 
            development technologies. Eager to apply strong problem-solving skills and 
            technical expertise in a new role as a software developer.
          </p>
          <img src={computer} alt="Computer" />
        </div>
      </div>
    </div>
  );
};
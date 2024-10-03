import style from './Home.module.css';
import picture from '/picture.jpg';

export const Home = () => {
  return (
    <div className={style.mainContainer}>
      <h1>Welcome to My Portfolio</h1>
      <div className={style.paragraph}>
        <p>
          I’m a passionate frontend developer focused on creating responsive, user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, and React.js, I build modern interfaces with seamless experiences. Check out my projects below!
        </p>
        <img src={picture} alt="My Picture" />
      </div>
    </div>
  );
};
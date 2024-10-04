import style from './Project.module.css';

export const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'HTML-based todo app', url: 'https://konoto1.github.io/html-todo/', img: './src/assets/todo.webp' },
    { title: 'Project 2', description: 'Portfolio website', url: 'https://konoto1.github.io/html-grupinisdarbas/', img: './src/assets/portfolio.png' },
    { title: 'Project 3', description: 'Hangman Game', url: 'https://konoto1.github.io/react-hangman/', img: './src/assets/hangman.jfif' },
    { title: 'Project 4', description: 'Tic-Tac-Toe Game', url: 'https://konoto1.github.io/html-tic-tac-toe/', img: './src/assets/tictactoe.jpg' },
  ];


  return (
    <div className={style.projectsContainer}>
      <h2>My Projects</h2>
      <div className={style.projectGrid}>
        {projectList.map((project, index) => (
          <div key={index} className={style.projectCard}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};
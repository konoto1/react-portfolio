import style from './Project.module.css';

export const Projects = () => {
  const projectList = [
    { title: 'Project 1', description: 'HTML-based todo app', url: 'https://konoto1.github.io/html-todo/', img: '../../../public/todo.webp' },
    { title: 'Project 2', description: 'Portfolio website', url: 'https://konoto1.github.io/html-grupinisdarbas/', img: '../../../public/portfolio.png' },
    { title: 'Project 3', description: 'Hangman Game', url: 'https://konoto1.github.io/react-hangman/', img: '../../../public/hangman.jfif' },
    { title: 'Project 4', description: 'Tic-Tac-Toe Game', url: 'https://konoto1.github.io/html-tic-tac-toe/', img: '../../../public/tictactoe.jpg' },
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
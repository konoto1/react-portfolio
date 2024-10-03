import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header.jsx'
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Footer } from './components/Footer/Footer.jsx';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

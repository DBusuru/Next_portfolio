import Header from '../components/Header';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className="container mt-5">
        <h1 className="display-4">My Projects</h1>
        <ul className="list-group">
          <li className="list-group-item">Project 1 - Description</li>
          <li className="list-group-item">Project 2 - Description</li>
          <li className="list-group-item">Project 3 - Description</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;


import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h1 className="display-4">About Me</h1>
        <p>I am David Busuru, an IT student and passionate developer.</p>
        <p>My goal is to make meaningful contributions through technology.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;

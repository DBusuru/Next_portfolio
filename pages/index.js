// pages/index.js
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className={`hero ${styles.hero}`}>
          <h1>Welcome to My Portfolio</h1>
          <p>I am David Busuru, a passionate software developer and IT student.</p>
          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGAjGH6oZcatw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721342954500?e=1752105600&v=beta&t=siUn9DaZQYcvW9T_BBU4jLK93fWv6CigDIrGNrtg3wI"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-circle"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

// pages/index.js
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <section className={`hero ${styles.hero}`}>
          <h1>Welcome to My Portfolio</h1>
          <p>I am David Busuru, a passionate software developer and IT student.</p>
          <div>
            <Image
              src="/profile.jpg"
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

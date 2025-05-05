import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        
        <div className="container my-5 flex-fill">
          <h2>About me</h2>
          <p>
            I am David Busuru, a tech-savvy explorer who navigates the digital realm with the precision of a coder and the curiosity of a lifelong learner. My journey in the world of technology is driven by a blend of creativity and logic, making me a versatile force in software development and digital marketing.
          </p>

          <div className="row mt-4">
            <div className="col-sm-4">
              <div className="single-about-add-info">
                <h3>Phone</h3>
                <p>+254700555823</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-about-add-info">
                <h3>Email</h3>
                <p>davidbusuru1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;

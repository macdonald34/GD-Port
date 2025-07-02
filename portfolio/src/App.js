import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Designs from './components/Designs';
import Typography from './components/Typography';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <AboutMe />
      <Skills />
      <Designs />
      <Typography />
      <Footer />
    </div>
  );
}

export default App;

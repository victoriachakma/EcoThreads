import styles from './style';
import { Navbar, Footer, About, Hero } from './components';

const App = () => (
    
  <div className="bg-olive w-full overflow-hidden">
  
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
    </div>

    <div className={` bg-olive ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <About />
        <Footer />
      </div>
    </div>
      
  </div>

);

export default App;


import styles from './style';
import { Navbar, Footer, Prototype, About, Hero } from './components';

const App = () => (
    
  <div className="bg-olive w-full overflow-hidden">
  
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
    </div>

    <div className={`bg-dimWhite ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-dimWhite mb-0 ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Prototype />
      </div>
    </div>

    <div className={` bg-dimWhite ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <About />
      </div>
    </div>
    <div className={` bg-olive ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
      
  </div>

);

export default App;


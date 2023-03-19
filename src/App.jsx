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

    <div className={`bg-dimWhite ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Prototype />
      </div>
    </div>

    <div className={`bg-dimWhite ${styles.paddingX} ${styles.flexCenter}`}>
      <iframe 
        style={{
        width: "460px",
        height: "900px",
        }}
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwWFkWVNMtbnDAaGo3Nx9Bi%2FEcoThreads%3Fpage-id%3D6%253A18%26node-id%3D6-21%26viewport%3D-122%252C469%252C0.45%26scaling%3Dscale-down%22%3E">
        </iframe>
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


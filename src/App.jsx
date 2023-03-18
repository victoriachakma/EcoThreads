import React from 'react';
import styles from './style';
import { Navbar, Footer} from './components';

const App = () => (
    
  <div className="bg-olive w-full overflow-hidden">
  
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
     </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
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


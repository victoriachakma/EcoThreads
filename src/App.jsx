import React from 'react';
import styles from './style';

const App = () => {
  return (
    <div>

      <div className="bg-olive w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <h1>Hello world!</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

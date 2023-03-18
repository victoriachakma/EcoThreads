import React from 'react'

const App = () => {
  return (
    <div>

      <div className="bg-olive w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

{/*<div className="bg-olive w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <h1>NAVBAR</h1>
      </div>
        
    </div>
    
</div>*/}
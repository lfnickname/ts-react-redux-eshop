import React from 'react';
import styles from './app.module.sass'
import Navbar from '../navbar/Navbar';
import About from '../about/About';
import Catalog from '../catalog/Catalog';


function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
      <div className={styles.fixedback}></div>
      <div className={styles.body}>
        <About/>
        <Catalog/>
      </div>
      <div className={styles.footer}> footer</div>
    </div>
  );
}

export default App;
import React from 'react';
import styles from './app.module.sass'
import Navbar from '../navbar/Navbar';
import About from '../about/About';
import Catalog from '../catalog/Catalog';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Basket from '../basket/Basket';

const Mainpage = () => {
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
  )
}

const BasketPage = () => {
  return (
    <div className={styles.app}>
      <Navbar/>
      <Basket/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Mainpage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
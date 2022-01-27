import React, { useState } from 'react';
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
import {CurrencyContext} from '../../context/index'
import SearchList from '../searchList/SearchList';
import Footer from '../footer/Footer';



const Mainpage = () => {
  return (
      <div className={styles.app}>
        <Navbar/>
        <div className={styles.fixedback}></div>
        <div className={styles.body}>
          <About/>
          <Catalog/>
        </div>
        <Footer/>
      </div>
  )
}

const BasketPage = () => {
  return (
    <div className={styles.app_basket_page}>
      <Navbar/>
      <Basket/>
      <Footer/>
    </div>
  )
}

const CatalogPage = () => {
  return (
    <div className={styles.app_catalog_page}>
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div>
  )
}

const SearchPage = () => {
  return (
    <div className={styles.app_search_page}>
      <Navbar/>
      <SearchList/>
      <Footer/>
    </div>
  )
}

function App() {
  const [currency, setCurrency] = useState<[string, string, number]>(['$', 'USD', 1])
  return (
    <CurrencyContext.Provider value={{currency, setCurrency}}>
    <Router>
      <Routes>
        <Route path='*' element={<Mainpage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/catalog/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
    </CurrencyContext.Provider>
  );
}

export default App;
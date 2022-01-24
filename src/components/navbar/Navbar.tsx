import React from 'react';
import styles from './navbar.module.sass'
import {ReactComponent as Cart} from '../../svg/cart.svg'
import {ReactComponent as Currency} from '../../svg/currency.svg'
import {ReactComponent as Sofa} from '../../svg/sofa.svg'
import {ReactComponent as SearchSVG} from '../../svg/search.svg'

interface NavbarProps {

}

const Navbar:React.FC<NavbarProps> = ({}) => {
    const title: string = 'Company name'
    const Search: React.FC= () => {
        return (
        <div className={styles.searchinputwrapper}>
            <input className={styles.searchinput} id='searchinput'/>
            <label htmlFor='searchinput'><SearchSVG width={24}/></label>
        </div>
        )
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.navMobile}>
                    <span className={styles.searchMobile}>
                    <div className={styles.inputGroup}>
                        <input className={styles.searchmob}/>
                        <span className={styles.bar}></span>                   
                    </div>
                    </span>
                    <span className={styles.titleMobile}>{title}</span>
                    <span className={styles.basketMobile}><Cart fill='#ffffff' width={30}/></span>
                </div>
                <div className={styles.nav}>
                    <span className={styles.phone}>8-123-456-78-90</span>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.currbasket}><Currency style={{marginRight: 25}} width={30}/><Cart width={30}/></span>
                    <span className={styles.logo}><Sofa width={84}/></span>
                    <span className={styles.about}>About us</span>
                    <span className={styles.catalog}>Catalog</span>
                    <span className={styles.contact}>Contacts</span>
                    <span className={styles.searcharea}><Search/></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
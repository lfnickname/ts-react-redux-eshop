import React, { useContext, useState } from 'react';
import styles from './navbar.module.sass'
import {ReactComponent as Cart} from '../../svg/cart.svg'
import {ReactComponent as Currency} from '../../svg/currency.svg'
import {ReactComponent as Sofa} from '../../svg/sofa.svg'
import {ReactComponent as SearchSVG} from '../../svg/search.svg'
import { Link } from 'react-router-dom';
import {CurrencyContext} from '../../context/index'
import { useNavigate } from "react-router-dom";



interface NavbarProps {

}
const Navbar:React.FC<NavbarProps> = ({}) => {
    const navigate = useNavigate()
    const {currency, setCurrency} = useContext(CurrencyContext)
    const title: string = 'Company name'


const Search: React.FC= () => {
    const [searchName, setSearchName] = useState<string>('')
    function searchHandler (e: React.MouseEvent){
        e.preventDefault()
        navigate(`/catalog/search?name=${searchName}`)
        console.log(searchName)

    }
    return (
    <div className={styles.searchinputwrapper} onSubmit={(e: any)=>searchHandler(e)}>
        <input value={searchName} onChange={event=>setSearchName(event.target.value)} className={styles.searchinput} id='searchinput'/>
        <label onClick={(e)=>searchHandler(e)} htmlFor='searchinput'><SearchSVG width={24}/></label>
    </div>
    )
    }

    function switchCurrency (sign: string, name: string, rate: number) {
        setCurrency([sign, name, rate])
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
                    <span className={styles.titleMobile}><Link to={'/'}><span style={{color: '#ffffff'}}>{title}</span></Link></span>
                    <span className={styles.basketMobile}><Link to={'/basket'}><Cart fill='#ffffff' width={30}/></Link></span>
                </div>
                <div className={styles.nav}>
                    <span className={styles.phone}>8-123-456-78-90</span>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.currbasket}>
                        <span className={styles.curr}>
                            <span className={styles.currflex}>
                                <Currency width={30}/>
                                <span className={styles.currsign}>
                                    USD
                                </span>
                            </span>
                            <span className={styles.currselector}>
                                <div className={styles.currcontent} onClick={()=>switchCurrency('$', 'USD', 1)}>$ USD</div>
                                <div className={styles.currcontent} onClick={()=>switchCurrency('€', 'EUR', 0.8)}>€ EUR</div>
                                <div className={styles.currcontent} onClick={()=>switchCurrency('₽', 'RUB', 78)}>₽ RUB</div>
                            </span>
                        </span>
                        <Link to={'/basket'}><Cart width={30}/></Link></span>
                    <span className={styles.logo}><Link to={'/'}><Sofa width={84}/></Link></span>
                    <Link className={styles.about} to={'/'}><span>About us</span></Link>
                    <Link className={styles.catalog} to={'/catalog'}><span className={styles.clearlink}>Catalog</span></Link>
                    <span className={styles.contact}>Contacts</span>
                    <span className={styles.searcharea}><Search/></span>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
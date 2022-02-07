import React, { useContext, useState } from 'react';
import styles from './navbar.module.sass'
import {ReactComponent as Cart} from '../../svg/cart.svg'
import {ReactComponent as Currency} from '../../svg/currency.svg'
import {ReactComponent as Sofa} from '../../svg/sofa.svg'
import {ReactComponent as SearchSVG} from '../../svg/search.svg'
import { Link } from 'react-router-dom';
import {CurrencyContext} from '../../context/index'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks/hooks';
import { switchSearching, wipePageData } from '../../store/reducer/dataSlice';



interface NavbarProps {

}
const Navbar:React.FC<NavbarProps> = ({}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {currency, setCurrency} = useContext(CurrencyContext)
    const title: string = 'Company name'

    function switchCurrency (sign: string, name: string, rate: number) {
        setCurrency([sign, name, rate])
    }
    const [searchName, setSearchName] = useState<string>('')
    function searchHandler (e: React.SyntheticEvent){
        dispatch(wipePageData())
        e.preventDefault()
        navigate(`/catalog/search?name=${searchName}`)
        // console.log(searchName)
        dispatch(switchSearching([true, searchName]))
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.navMobile}>
                    <span className={styles.searchMobile}>
                    <div >
                        <form className={styles.inputGroup} onSubmit={(e: React.SyntheticEvent)=>searchHandler(e)}>
                        <input
                                className={styles.mobSearch}
                                type='text'
                                placeholder=''
                                value={searchName} 
                                onChange={event=>setSearchName(event.target.value)} 
                                />
                        <span className={styles.bar}/>
                        </form>
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
                    <span className={styles.contact} onClick={()=>alert('Contacts section and nodemailer is not available yet')}>Contacts</span>
                    <span className={styles.searcharea}>
                        <form className={styles.searchinputwrapper} onSubmit={(e: React.SyntheticEvent)=>searchHandler(e)}>
                            <input value={searchName} onChange={event=>setSearchName(event.target.value)} className={styles.searchinput} id='searchinput'/>
                            <label onClick={(e)=>searchHandler(e)} htmlFor='searchinput'><SearchSVG width={24}/></label>
                        </form>
                    </span>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
import React, { useContext, useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { addToBasket } from '../../../store/reducer/basketSlice';
import styles from './catalogitem.module.sass'
import {CurrencyContext} from '../../../context/index'

interface product {
    id: number
    name: string
    price: number
    subtitle: string
    tag: string[]
    type: string
    url: string
  }

interface CatalogItemProps {
    item: {
        id: number,
        name: string,
        tag: string[],
        subtitle: string,
        url: string,
        price: number,
        type: string
    }
}



const CatalogItem: React.FC<CatalogItemProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const [notStatus, setNotStatus] = useState<boolean>(false)
    const {currency, setCurrency} = useContext<any>(CurrencyContext)
    

    function addToCart (item: product): void {
        dispatch(addToBasket(item))
        if (notStatus === false) {
            setNotStatus(!notStatus)
            setTimeout(()=>{setNotStatus(false)}, 2400)
        }
    }
    return (
        <div className={styles.catalog_item_wrapper}>
            {notStatus ? <div className={styles.notification}>Added to cart</div> : <div style={{display: 'none'}}></div>}
            <div className={styles.container}>
                <div className={styles.name}>{item.name}<span style={{color: '#a1a1a1'}}> id:{item.id}</span></div>
                <div className={styles.imgwrapper}><img className={styles.img} src={item.url}/></div>
                <div className={styles.price}>{Math.round(item.price * currency[2])}{currency[0]}</div>
                <div className={styles.buttonContainer}><button className={styles.addtocart} onClick={()=>addToCart(item)}>Add to cart</button></div>
            </div>
        </div>

    );
}

export default CatalogItem;
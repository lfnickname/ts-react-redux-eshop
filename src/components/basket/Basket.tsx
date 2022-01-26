import React, { useContext } from 'react';
import styles from './basket.module.sass'
import { useAppSelector } from '../../hooks/hooks';
import { selectBasketData, selectBasketTotalPrice } from '../../store/reducer/basketSlice';
import BasketItem from './basketItem/basketItem';
import { product } from '../../store/reducer/dataSlice';
import {CurrencyContext} from '../../context/index'

const Basket: React.FC = () => {
    const basketList: product[] = useAppSelector(selectBasketData)
    const totalPrice: number = useAppSelector(selectBasketTotalPrice)
    const {currency, setCurrency} = useContext<any>(CurrencyContext)
    console.log(currency)
    return (
        <div className={styles.wrapper}>
            {basketList[0] ?
            <div className={styles.basket}>
                <div className={styles.head}>
                    <span className={styles.img}>image</span>
                    <span className={styles.name}>name</span>
                    <span className={styles.subtitle}>subtitle</span>
                    <span className={styles.price}>price</span>
                    <span></span>
                </div>
            <div className={styles.basketitem}>
                {basketList.map(item=><BasketItem key={item.id} item={item}/>)}
                <div className={styles.totalPrice}>Total: {Math.round(totalPrice * currency[2])}{currency[0]}</div>
            </div>
            
            </div>
            :
            <div>Basket is empty :-( </div>}
        </div>
    );
}

export default Basket;
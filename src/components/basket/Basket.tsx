import React from 'react';
import styles from './basket.module.sass'
import { useAppSelector } from '../../hooks/hooks';
import { selectBasketData } from '../../store/reducer/basketSlice';
import BasketItem from './basketItem/basketItem';
import { product } from '../../store/reducer/dataSlice';

const Basket: React.FC = () => {
    const basketList: product[] = useAppSelector(selectBasketData)
    return (
        <div className={styles.wrapper}>
            <div className={styles.basket}>
                <div className={styles.head}>
                    <span className={styles.img}>image</span>
                    <span className={styles.name}>name</span>
                    <span className={styles.subtitle}>subtitle</span>
                    <span className={styles.price}>price</span>
                    <span></span>
                </div>
                <div className={styles.basketitem}>{basketList.map(item=><BasketItem item={item}/>)}</div>
            </div>
        </div>
    );
}

export default Basket;
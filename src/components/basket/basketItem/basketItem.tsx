import React, { useContext, useState } from 'react';
import styles from './basketItem.module.sass'
import { product, removeFromBasket } from '../../../store/reducer/basketSlice';
import {ReactComponent as TrashSVG} from '../../../svg/trash.svg'
import { useAppDispatch } from '../../../hooks/hooks';
import {CurrencyContext} from '../../../context/index'


interface basketItemProps {
    item: product
}

const BasketItem: React.FC<basketItemProps> = ({item}) => {

    const {currency, setCurrency} = useContext<any>(CurrencyContext)
    const dispatch = useAppDispatch()
    function clickHandler (item: product) {
        dispatch(removeFromBasket(item))
    }
    return (
        <div>
            <div>
            
            </div>
            <div className={styles.container}>
                <div className={styles.image}><img className={styles.img} src={item.url}/></div>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.subtitle}>{item.subtitle}</div>
                <div className={styles.price}>{Math.round(item.price * currency[2])}{currency[0]}</div>
                <div className={styles.trash}><TrashSVG className={styles.trashSVG} width={24} onClick={()=>{clickHandler(item)}}/></div>
            </div>
        </div>
    );
}

export default BasketItem;
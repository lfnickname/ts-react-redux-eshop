import React from 'react';
import styles from './basketItem.module.sass'
import { product, removeFromBasket } from '../../../store/reducer/basketSlice';
import {ReactComponent as TrashSVG} from '../../../svg/trash.svg'
import { useAppDispatch } from '../../../hooks/hooks';

interface basketItemProps {
    item: product
}

const BasketItem: React.FC<basketItemProps> = ({item}) => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.container}>
            <div className={styles.image}><img className={styles.img} src={item.url}/></div>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
            <div className={styles.price}>{item.price}$</div>
            <div className={styles.trash}><TrashSVG className={styles.trashSVG} width={24} onClick={()=>{dispatch(removeFromBasket(item))}}/></div>
        </div>
    );
}

export default BasketItem;
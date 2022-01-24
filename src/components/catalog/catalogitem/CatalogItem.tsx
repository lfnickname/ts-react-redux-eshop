import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { addToBasket } from '../../../store/reducer/basketSlice';
import styles from './catalogitem.module.sass'

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

    function addToCart (item: product): void {
        dispatch(addToBasket(item))
    }
    return (
        <div className={styles.container}>
            <div className={styles.name}>{item.name}<span style={{color: '#a1a1a1'}}> id:{item.id}</span></div>
            <div className={styles.imgwrapper}><img className={styles.img} src={item.url}/></div>
            <div className={styles.price}>{item.price}$</div>
            <div className={styles.buttonContainer}><button className={styles.addtocart} onClick={()=>addToCart(item)}>Add to cart</button></div>
        </div>
    );
}

export default CatalogItem;
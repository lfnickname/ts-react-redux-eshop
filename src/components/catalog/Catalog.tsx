import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts, selectData, dataState } from '../../store/reducer/dataSlice';
import styles from './catalog.module.sass'

interface CatalogProps {

}




const Catalog: React.FC<CatalogProps> = () => {
    const data = useAppSelector(selectData)
    const dispatch = useAppDispatch()
    useEffect(()=>{dispatch(fetchProducts({count: 12, page: 1}))}, [])
    console.log(data)
    return (
        <div>
            
        </div>
    );
}

export default Catalog;
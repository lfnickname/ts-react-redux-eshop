import React, { useEffect } from 'react';
import styles from './searchlist.module.sass'
import CatalogItem from '../catalog/catalogitem/CatalogItem';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts, product, selectCurrentPage, selectData, selectPageList, selectSearchingStatus, switchCurrentPage, switchSearching } from '../../store/reducer/dataSlice';

const SearchList: React.FC = () => {
    const data: [T: product | null] = useAppSelector(selectData)
    const pageList = useAppSelector(selectPageList)
    const currentPage = useAppSelector(selectCurrentPage)
    const searchingStatus = useAppSelector(selectSearchingStatus)
    const dispatch = useAppDispatch()
    function switchPage (e: React.MouseEvent, page: number): void {
        e.preventDefault()
        dispatch(switchCurrentPage(page))
    }
    useEffect(()=>{
        dispatch(fetchProducts({count: 12, page: currentPage, name: searchingStatus[1]}))
    }, [currentPage, searchingStatus[1]])
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.itemlist}>
                    {data.map(item=> {if (item) {return <div key={item.id} className={styles.itemwrapper}><CatalogItem item={item}/></div>}})}
                </div>
                <div className={styles.pages}>
                <span>
                    {pageList.map(item=><span key={item}><button className={styles.page_button} value={item} onClick={(e: React.MouseEvent)=>switchPage(e, item)}>{item}</button></span>)}
                </span>
            </div>
            </div>
        </div>
    );
}

export default SearchList;
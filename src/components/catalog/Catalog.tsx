import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchProducts, selectData, dataState, selectPageList, selectCurrentPage, switchCurrentPage, product, wipePageData, selectSearchingStatus, switchSearching} from '../../store/reducer/dataSlice';
import styles from './catalog.module.sass'
import CatalogItem from './catalogitem/CatalogItem';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


// const mock = [{"id":1,"name":"Sofa","tag":["red","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://hortika-mebel.ru/data/medium/19_20.png","price":150,"type":"sofa"},
// {"id":2,"name":"Sofa","tag":["blue","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://divanchik.ru/upload/resize_cache/iblock/90f/1100_900_1d7a58ff99b324185ccb5ad5dfbdb5e85/90fd6b3339fa0868371b06a9b931ad4a.png","price":145,"type":"sofa"},
// {"id":3,"name":"Sofa","tag":["green","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://loft-concept.ru/upload/iblock/d43/Divan_dvukhmestnyi_774_Velwish_green.png","price":155,"type":"sofa"},
// {"id":4,"name":"Bed","tag":["blue","bed"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://umilinegroup.ru/image/cache/catalog/demo/Coretto/MYeDYSON-v-synem-2-800x600.png","price":103,"type":"bed"},
// {"id":5,"name":"Bed","tag":["red","bed"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://mebelmarket.su/upload/iblock/bf6/bf677dcf728bb141fc2c63521b3f3340.png","price":113,"type":"bed"},
// {"id":6,"name":"Bed","tag":["green","bed"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://ahdivan.ru/upload/resize_cache/iblock/7cc/1200_900_1/Krovat_York_Zelenyy_1.png","price":93,"type":"bed"},
// {"id":7,"name":"Armchair","tag":["green","armchair"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://www.mebel-mix.ru/image/cache/upload/iblock/af3/af3e4df5ac5a5747d9e8e58c11513f80-1000x1000.png","price":53,"type":"armchair"},
// {"id":8,"name":"Armchair","tag":["blue","armchair"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://zeelproject.com/uploads/posts/2021-08-18/1629292454_modern-blue-armchair.png","price":43,"type":"armchair"},
// {"id":9,"name":"Armchair","tag":["red","armchair"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://hortika-mebel.ru/data/medium/%D0%9E%D0%9A1bhrya%D0%9A%D0%A0_(1).png","price":57,"type":"armchair"},
// {"id":10,"name":"Sofa","tag":["red","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://hortika-mebel.ru/data/medium/19_20.png","price":130,"type":"sofa"},
// {"id":11,"name":"Sofa","tag":["blue","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://divanchik.ru/upload/resize_cache/iblock/90f/1100_900_1d7a58ff99b324185ccb5ad5dfbdb5e85/90fd6b3339fa0868371b06a9b931ad4a.png","price":135,"type":"sofa"},
// {"id":12,"name":"Sofa","tag":["green","sofa"],"subtitle":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","url":"https://loft-concept.ru/upload/iblock/d43/Divan_dvukhmestnyi_774_Velwish_green.png","price":165,"type":"sofa"}]

interface CatalogProps {

}

type iFilter = string[]


const Catalog: React.FC<CatalogProps> = ({}) => {
    const location = useLocation()
    const [filter, setFilter] = useState<iFilter>([])
    const [itemType, setItemType] = useState<any>()
    const data: [T: product | null] = useAppSelector(selectData)
    const pageList = useAppSelector(selectPageList)
    const currentPage = useAppSelector(selectCurrentPage)
    const searchingStatus = useAppSelector(selectSearchingStatus)
    const dispatch = useAppDispatch()
    const options = [
        { value: '', label: 'Any' },
        { value: 'sofa', label: 'Sofa' },
        { value: 'bed', label: 'Bed' },
        { value: 'armchair', label: 'Armchair' },
      ];

    const colourOptions = [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
      ];
    useEffect(()=>{
        if (searchingStatus[0]) {
            dispatch(wipePageData())
            dispatch(switchSearching([false]))
        }
        if (filter[0] && itemType!= null && itemType!= undefined) {
            dispatch(fetchProducts({count: 12, page: currentPage, filter: filter, type: itemType}))
        }
        else if (filter[0]) {
            dispatch(fetchProducts({count: 12, page: currentPage, filter: filter}))
        }
        else if (itemType!= null && itemType!= undefined) {
            dispatch(fetchProducts({count: 12, page: currentPage, type: itemType}))
        }
        else {
            dispatch(fetchProducts({count: 12, page: currentPage}))
        }
    }, [currentPage, filter, itemType, location])


    function switchPage (e: React.MouseEvent, page: number): void {
        e.preventDefault()
        dispatch(switchCurrentPage(page))
    }

    function switchFilter (e: any): void {
        dispatch(wipePageData())
        setFilter([])
        const result: string[] = []
        e.map((item: any) => [result.push(item.value)])
        setFilter(result)
    }

    function switchType (e: any): void {
        dispatch(wipePageData())
        setItemType(e.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.mobfilter}>
                 <Select
                    defaultValue={{value: '', label: 'Select type'}}
                    onChange={switchType}
                    options={options}
                />
                <Select placeholder={'Select color'}
                    components={animatedComponents}
                    onChange={switchFilter}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.filter}>
                    <br/>
                    <Select placeholder={'Select color'}
                        components={animatedComponents}
                        onChange={switchFilter}
                        isMulti
                        name="colors"
                        options={colourOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                    <Select
                        defaultValue={{value: '', label: 'Select type'}}
                        onChange={switchType}
                        options={options}
                    />
                </div>
                <div className={styles.itemlist}>
                    {data.map(item=> {if (item) {return <div key={item.id} className={styles.itemwrapper}><CatalogItem item={item}/></div>}})}
                </div>
            </div>
            <div className={styles.pages}>
                <span></span>
                <span>
                    {pageList.map(item=><span key={item}><button className={styles.page_button} value={item} onClick={(e: React.MouseEvent)=>switchPage(e, item)}>{item}</button></span>)}
                </span>
            </div>
            
        </div>
    );
}

export default Catalog;
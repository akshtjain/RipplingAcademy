import { useEffect, useState } from 'react';
import service from '../service'
import {apiWrapper} from '../ulility-functions';
import Loading from './Loading';
import ProductGrid from './ProductGrid';
import SideBar from './SideBar';

const Home = () => {

    const [productList, setProductList] = useState(undefined);

    useEffect(()=>{
        getAllProducts();
    },[]);
    const  getAllProducts = async () => {
        let res =  await apiWrapper(service.getAllProducts,[]);
        setProductList(res.products);
    }

    
    return ( 
        <div className='home'>
            <SideBar/>
            { productList === undefined &&
                <Loading/>
            }
            { productList !== undefined &&
                <ProductGrid productList={productList}/>
            } 
        </div>
        
    );
}
 
export default Home;
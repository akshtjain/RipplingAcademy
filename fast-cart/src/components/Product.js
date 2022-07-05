import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { CART_ACTIONS, useShopping, useShoppingUpdate } from "../context/ShoppingListContext";
import service from "../service";
import { apiWrapper } from "../ulility-functions";
import ChangeQuantity from "./ChangeQuantity";
import Loading from "./Loading";

import SimpleImageSlider from "react-simple-image-slider";


const MAX_IMAGES_NUM = 7;

var productImages = [];

const Product = () => {
    const {id} = useParams();
    const [productData, setProductData] = useState(undefined);
    const [productImages, setProductImages] = useState(0);
    
    // const [inCart, setInCart] = useState(0);

    // const {shoppingList, setShoppingList} = useContext(shoppingContext);

    useEffect(()=>{
        service.resetCart();
        getProductById();
    },[]);

    useEffect(()=>{

        if(productData === undefined)
            return;
        const productImagesTemp = [];
        productData.images.forEach((imageObj)=>{
            if(productImagesTemp.length === MAX_IMAGES_NUM)
                return false;
            productImagesTemp.push({url:imageObj["href"]});
        });
        setProductImages(productImagesTemp);
        // console.log(productData);
    },[productData]);

    

    const getProductById = async () => {
        let res = await apiWrapper(service.getProductById, [id]);
        setProductData(res.products[0]);
    }

    
    return (
        <div>
            {productData === undefined &&
                <Loading/>
            }
           {productData && 
           <div className="product-page">
                <div className="product-page-mainData">
                    <div className="product-image-card">
                        {/* <img className = "product-page-image" src ={productData.images[imgNo]} /> */}
                        <SimpleImageSlider
                            width={400}
                            height={600}
                            images={productImages}
                            showBullets={true}
                            showNavs={true}
                        />

                    </div>
                    <div className="product-description">
                        <h2>{productData.name}</h2>
                        <h3>{productData.salePrice}</h3>
                        <ChangeQuantity id = {id} addToCart={true}/>
                    </div>
                </div>
                
                
            </div>}
            
        </div>  
    );
}
 
export default Product;
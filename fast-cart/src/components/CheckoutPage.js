import { useEffect, useMemo, useState } from "react";
import { useShopping } from "../context/ShoppingListContext";
import service from "../service";
import { apiWrapper } from "../ulility-functions";
import ChangeQuantity from "./ChangeQuantity";
import Loading from "./Loading";

const CheckoutPage = () => {
    const shoppingList = useShopping();
    const [cartData, setCartData] = useState(undefined);

    const getCartData = async () => {
        if(shoppingList === undefined){
            return;
        }
        if(Object.keys(shoppingList).length === 0){
            setCartData([]);
            return;
        }
        var ids = [];
        Object.keys(shoppingList).map((key)=>{
            ids.push(key);
        });
        const res = await apiWrapper(service.getProductListByIds,[ids]);
        if(res !== undefined){
            setCartData(res.products);
        }
    }



    useEffect(()=>{
        console.log(shoppingList);
        getCartData();
    },[shoppingList]);

    return (  
        <div className="checkoutPage">
            {shoppingList === undefined &&
                <Loading/>
            }
            {shoppingList !== undefined && Object.keys(shoppingList).length === 0 &&
                <h1>*Cricket Noises*</h1>
            }
            {shoppingList !== undefined && Object.keys(shoppingList).length > 0 && cartData !== undefined &&
                cartData.map((item)=>(
                    <div key = {item.sku}>
                        { item.sku in shoppingList && 
                            <div className="checkoutPage-tile flex-row-noWrap" >
                                <div className="checkoutPage-tile-image">
                                    <img className="checkoutPage-product-image" src={item.image}></img>
                                </div>
                                <div>
                                    <div className="checkoutPage-tile-details">
                                        <h2>{item.name}</h2>
                                        <h3>{item.salePrice}</h3>
                                        <ChangeQuantity id ={item.sku} addToCart={false}/>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default CheckoutPage;
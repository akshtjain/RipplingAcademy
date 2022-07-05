import { createContext, useContext, useEffect, useState } from "react";
import service from "../service";



const ShoppingContext = createContext();
const ShoppingUpdateContext = createContext();

export const CART_ACTIONS = {
    ADD_ITEM : 'add-item-in-cart',
    REMOVE_ITEM: 'remove-item-from-cart'
}

export const useShopping = () =>{
    return useContext(ShoppingContext);
}

export const useShoppingUpdate = () => {
    return useContext(ShoppingUpdateContext);
}

export const ShoppingProvider = ({children}) => {
    const [shoppingList, setShoppingList] = useState({});

    useEffect(()=>{
        const updatedList = service.getCartItems();
        setShoppingList(updatedList);
    },[]);
    
    const updateShoppingList = (id, action) =>{
        if(action === CART_ACTIONS.ADD_ITEM){
            service.addItemToCart(id);
        }else if (action === CART_ACTIONS.REMOVE_ITEM){
            service.removeItemFromCart(id);
        }
        const updatedList = service.getCartItems();
        console.log(updatedList);
        setShoppingList(updatedList);
    }

    useEffect(()=>{
    },[])

    return (
        <ShoppingContext.Provider value={shoppingList}>
            <ShoppingUpdateContext.Provider value={updateShoppingList}>
                {children} 
            </ShoppingUpdateContext.Provider>
        </ShoppingContext.Provider>
    );
}







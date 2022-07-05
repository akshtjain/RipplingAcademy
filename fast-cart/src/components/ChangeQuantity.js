import { useMemo } from "react";
import { CART_ACTIONS, useShopping, useShoppingUpdate } from "../context/ShoppingListContext";

const ChangeQuantity = ({id, addToCart}) => {
    const updateShoppingList = useShoppingUpdate();
    const shoppingList = useShopping();

    const addItemtoCart = () => {
        updateShoppingList(id, CART_ACTIONS.ADD_ITEM);
    }

    const numberOfItemsInCart = useMemo(()=>{
        if(id in shoppingList){
            return shoppingList[id];
        }else{
            return 0;
        }
    },[shoppingList]);

    const removeItemFromCart = () => {
        updateShoppingList(id, CART_ACTIONS.REMOVE_ITEM);
    }

    return (
        <>
            { numberOfItemsInCart === 0 && addToCart &&
                <button onClick={addItemtoCart}>Add to cart</button>
            }
            { numberOfItemsInCart > 0 &&
                <div className="flex-row">
                    <div onClick={removeItemFromCart} className="remove-item icon-30px"></div>
                    <div>Cart {numberOfItemsInCart}</div>
                    <div onClick={addItemtoCart} className="add-item icon-30px"></div>
                </div>
            }
        </>
    );
}
 
export default ChangeQuantity;
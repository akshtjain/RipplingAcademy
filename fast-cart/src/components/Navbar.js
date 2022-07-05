import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useShopping } from "../context/ShoppingListContext";

const Navbar = () => {

    const shoppingList = useShopping();

    const totalItems = useMemo(()=>{
        var number = 0;
        for(var item in shoppingList){
            number = number + shoppingList[item];
        }
        return number;
    }, [shoppingList]);


    return (
        <div className="navbar flex-row-noWrap">
            <div className="page-title">
                <Link to ='/home'>
                    <span>FastCart</span>
                </Link>
            </div>
            <div className="searchbox width-100percent">
                <input className="width-100percent"></input>
            </div>
            <div>
                <Link to='/checkout'>
                    <div className="cartButton icon-30px">
                        <span style={{backgroundColor:'red', borderRadius:'20px'}}>{totalItems}</span>
                    </div>
                </Link>
            </div>
            
            
        </div>
    );
}

export default Navbar;
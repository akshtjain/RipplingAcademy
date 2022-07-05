import env from './env'
const API_URL = env.API_URL;
const API_TOKEN = env.API_TOKEN;
const service  = {
    getAllProducts : () =>{
        return fetch(`${API_URL}/products(classId=42)?format=json&pageSize=10&page=1&apiKey=${API_TOKEN}`);
    },
    getProductsByCategory : () => {

    },
    getProductById : (id) => {
        return fetch(`${API_URL}/products(sku=${id})?format=json&apiKey=${API_TOKEN}`);
    },
    getProductListByIds : (ids) => {
        var idList = '()';
        if(ids.length !== 0){
            var idList = '(';
            ids.forEach((id)=>{
                idList = idList+id+',';
            })
            idList = idList.slice(0, -1);
            idList = idList + ')';
        }
        return fetch(`${API_URL}/products(sku%20in${idList})?format=json&apiKey=${API_TOKEN}`);
    },
    resetCart : () => {
        if(localStorage.getItem('cart') === null)
        {
            var obj = {};
            var strings = JSON.stringify(obj);
            localStorage.setItem("cart", strings);
        }
    },
    getCartItems : () =>{
        return JSON.parse(localStorage.getItem("cart"));
    },
    setCartItems : (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    },
    addItemToCart : (id) => {
        var cart = service.getCartItems();
        var updatedCart = {...cart};
        if(id in updatedCart){
            updatedCart[id] = updatedCart[id]+1
        }else{
            updatedCart[id] = 1;
        }
        service.setCartItems(updatedCart);
    }, 
    removeItemFromCart : (id) =>{
        var cart = service.getCartItems();
        var updatedCart = {...cart};
        if(id in updatedCart){
            updatedCart[id] = updatedCart[id]-1;
            if(updatedCart[id] === 0)
                delete updatedCart[id];
        }
        service.setCartItems(updatedCart);
    }
}
export default service;
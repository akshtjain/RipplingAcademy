import { BrowserRouter, Link } from "react-router-dom";

const ProductTile = ({details}) => {
    return (  
        <div className="product-tile">  
            <div>
                <Link to ={`/product/${details.sku}`}>
                    <img className = 'productTile-product-image' src={details.image}/>
                </Link>
            </div>
            <div className="productTile-product-description">
                price : {details.salePrice}
            </div>
        </div>
    );
}
 
export default ProductTile;
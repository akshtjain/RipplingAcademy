import Product from "./Product";
import ProductTile from "./ProductTile";

const ProductGrid = ({productList}) => {
    return ( 
        <div className="product-grid flex-row">
            {productList.map((product) => (
                <ProductTile details={product} key={product.sku}/>
            ))}
        </div>
    );
}
 
export default ProductGrid;
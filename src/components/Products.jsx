import Product from "./Product";
import { popularProducts } from "../data";

const Products = () => {
    return (
        <div className="flex flex-row flex-wrap ">
            {popularProducts.map((item) => (
                <Product item={item} />
            ))}
        </div>
    )
}

export default Products;
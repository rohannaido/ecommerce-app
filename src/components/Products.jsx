import Product from "./Product";
import { popularProducts } from "../data";
import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = ({cat, filters, sort}) => {

    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);

    useEffect(() => {
        console.log("TEST");
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products/?category=${cat}`: 'http://localhost:5000/api/products');
                console.log(res);
                setProducts(res.data);

            }
            catch (err) {
                console.log(err);
            }
        }
        getProducts();
    },[cat])

    useEffect(() => {
        console.log(filters);
        cat && setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
    },[products, cat, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt));
        }
        else if (sort === "asc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
        }
        else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
        }
    },[sort]);

    return (
        <div className="flex flex-row flex-wrap ">
            {cat ? filteredProducts.map((item) => (
                <Product item={item} />
            )) : products.map((item) => (
                <Product item={item} />
            ))
            }
        </div>
    )
}

export default Products;
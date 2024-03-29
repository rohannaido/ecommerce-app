import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const [ filters, setFilters ] = useState({});
    const [ sort, setSort ] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters(
            {
                ...filters,
                [e.target.name] : value 
            }
        )
    }
    const handleSort = (e) => {
        setSort(e.target.value);
    }

    // console.log(filter)
    // console.log("SORT", sort);

    return (
        <div>
            <Navbar />
            <Announcement />
            
            <div>
                <h1 className="text-center text-4xl font-bold m-4">{cat}</h1>
                <div className="flex justify-between m-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                        <span className="font-bold">Filter:</span>
                        <select name="flavour" className="border border-slate-400 border-solid p-1 m-1" onChange={handleFilters}>
                            <option default disabled>Flavour</option>
                            <option>chocolate</option>
                            <option>coffee</option>
                            <option>vanilla</option>
                            <option>milkshake</option>
                        </select>
                        <select name="weight" className="border border-slate-400 border-solid p-1 m-1" onChange={handleFilters}>
                            <option disabled>Weight</option>
                            <option>0.5kg</option>
                            <option>1kg</option>
                            <option>2kg</option>
                            <option>4kg</option>
                        </select>
                    </div>
                    <div className="text-right flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="font-bold">Sort:</span>
                        <select className="border border-slate-400 border-solid p-1 m-1" onChange={handleSort}>
                            <option value="newest" selected>Newest</option>
                            <option value="rating">Rating</option>
                            <option value="popularity">Popularity</option>
                            <option value="desc">Price (High to Low)</option>
                            <option value="asc">Price (Low to High)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;
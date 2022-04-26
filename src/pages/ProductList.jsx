import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"
import Products from "../components/Products";

const ProductList = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            
            <div>
                <h1 className="text-center text-4xl font-bold m-4">WHEY PROTIEN</h1>
                <div className="flex justify-between m-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
                        <span className="font-bold">Filter:</span>
                        <select className="border border-slate-400 border-solid p-1 m-1">
                            <option selected>Color</option>
                            <option>Blue</option>
                            <option>Black</option>
                            <option>Orange</option>
                            <option>Purple</option>
                        </select>
                        <select className="border border-slate-400 border-solid p-1 m-1">
                            <option selected>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>XXXL</option>
                        </select>
                    </div>
                    <div className="text-right flex flex-col sm:flex-row items-start sm:items-center">
                        <span className="font-bold">Sort:</span>
                        <select className="border border-slate-400 border-solid p-1 m-1">
                            <option selected>Newest</option>
                            <option>Rating</option>
                            <option>Popularity</option>
                            <option>Price (High to Low)</option>
                            <option>Price (Low to High)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;
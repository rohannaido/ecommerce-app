import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import Toast from '../components/Toast'

const Product = () => {
    console.log("PRODUCT PAGE!!!!!!!!");
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [ product, setProduct ] = useState({})
    const [ quantity, setQuantity ] = useState(1);
    const [ flavour, setFlavour ] = useState("");
    const [ weight, setWeight ] = useState("");
    const dispatch = useDispatch();
    const [ showToast, setShowToast ] = useState(false);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data);
                setFlavour(res.data.flavour[0]);
                setWeight(res.data.weight[0]);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();
    },[id])

    console.log('Weight', weight);
    console.log('FLAVOUR', flavour);
    // product.color.map((item) =>  );

    const handleClickQuantity = (operation) => {
        if (operation === "inc" && quantity < 10){
            setQuantity(quantity + 1);
        }
        else if (operation === "dec" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, quantity, flavour, weight }));
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    }

    return (
        <div>
            <Navbar />
            <Announcement />
            <Toast text="Added to your cart" display={showToast} />
            <div className='flex flex-col sm:flex-row p-10'>
                <div className='flex-none sm:flex-1 h-64 sm:h-70vh'>
                    <img className='h-full w-full object-cover' src={product.img}></img>
                </div>
                <div className='flex-none sm:flex-1 px-4 sm:px-8'>
                    <h1 className='text-4xl font-light my-4'>{product.title}</h1>
                    <p className='mb-4'>{product.desc}</p>
                    <span className='text-3xl'>₹ {product.price}</span>
                    <div className='flex w-full sm:w-1/2 justify-between items-center my-6'>
                        <div className='flex'>
                            <span className='flex justify-center items-center'>Flavour</span>
                            <select className="border border-black border-solid p-1 m-1" onChange={(e) => setFlavour(e.target.value)}>
                                <option default disabled>Flavour</option>
                                {console.log(product)}
                                {product.flavour ? product.flavour.map((item) => { return (
                                    <option>{item}</option>
                                    )}) : <></>
                                }
                            </select>
                        </div>
                        <div className='flex'>
                            <span className='flex justify-center items-center'>Weight</span>
                            <select className="border border-black border-solid p-1 m-1" onChange={(e) => setWeight(e.target.value)}>
                                <option default disabled>Weight</option>
                                {product.weight ? product.weight.map((item) => { return (
                                    <option>{item}</option>
                                    )}) : <></>
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full sm:w-1/2 justify-between items-center my-6'>
                        <div className='flex items-center'>
                            <RemoveIcon className='cursor-pointer' onClick={() => handleClickQuantity('dec')}/>
                            <span className='flex justify-center items-center border-2 border-teal-600 border-solid w-8 h-8 rounded-lg mx-2'>{quantity}</span>
                            <AddIcon className='cursor-pointer' onClick={() => handleClickQuantity('inc')}/>
                        </div>
                        <button className='border-2 border-solid border-teal-800 rounded-md p-2' 
                        onClick={handleAddToCart}>ADD TO CART</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            {/* <Newsletter /> */}
            <Footer />
        </div>
    )
}

export default Product;
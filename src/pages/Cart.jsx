import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    console.log(cart);

    //CHECKOUT
    const clickHandler = async () => {
        try{
            console.log("CLICKED")
            const res = await axios.post("http://localhost:5000/api/checkout/create-payment-session", {
                items: cart.products,
            }
            );
            window.location = res.data.url;
            
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar />
            <Announcement />

            <div>
                <h1 className='text-3xl text-center my-4'>YOUR BAG</h1>
                <div className='flex justify-between items-center p-2 m-4'>
                    <button className='border border-solid border-teal-700 p-2'>CONTINUE SHOPPING</button>
                    <span className='hidden sm:inline'>
                        <span className='underline mr-2'>Shopping Bag(2)</span>
                        <span className='underline ml-2'>Your Wishlist(0)</span>
                    </span>
                    <button className='text-white bg-teal-700 p-2'>CHECKOUT NOW</button>
                </div>
                <div className='flex flex-col sm:flex-row '>
                    <div className='pl-6' style={{flex: '3'}}>

                    { cart.products.map((product) => { 
                        return(
                        <div className='flex flex-col sm:flex-row justify-evenly'>
                            <div className='flex'>
                                <img src={product.img} style={{width: '200px'}}></img>
                                <div className='flex flex-col justify-between p-4'>
                                    <span>
                                        <strong>Product: </strong>{product.title}
                                    </span>
                                    <span>
                                        <strong>ID: </strong>{product._id}
                                    </span>
                                    <div className='' style={{height: '20px', width: '20px', borderRadius: '50%', backgroundColor: product.color}}></div>
                                    <span>
                                        <strong>Size: </strong>{product.size}
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-row sm:flex-col justify-between sm:justify-center items-center mx-5 sm:m-8'>
                                <div className='flex items-center my-2'>
                                    <RemoveIcon className='cursor-pointer'/>
                                    <span className='flex justify-center items-center w-8 h-8 text-2xl'>{product.quantity}</span>
                                    <AddIcon className='cursor-pointer'/>
                                </div>
                                <span className='text-3xl my-2'>{product.price*product.quantity}</span>
                            </div>
                            <hr className='border-slate-300'></hr>
                        </div>
                        )}
                        )
                    }

                    </div>
                    <div className='border border-slate-300 border-solid rounded-md flex flex-col p-4 justify-between h-72 sm:h-70vh'>
                        <h1 className='text-center text-3xl'>ORDER SUMMARY</h1>
                        <div className='flex justify-between'>
                            <span>Subtotal </span><span>${cart.total}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Estimated Shipping </span><span>$6</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Shipping Discount </span><span>-$6</span>
                        </div>
                        <div className='flex justify-between text-xl font-bold'>
                            <span>Total </span><span>${cart.total}</span>
                        </div>
                        <button className='border border-solid border-teal-700 rounded-md p-2' onClick={clickHandler}>CHECKOUT NOW</button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Cart;
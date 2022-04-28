import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Product = () => {

    const location = useLocation();
    console.log(location);

    return (
        <div>
            <Navbar />
            <Announcement />

            <div className='flex flex-col sm:flex-row p-10'>
                <div className='flex-none sm:flex-1 h-64 sm:h-70vh'>
                    <img className='h-full w-full object-cover' src='https://i.ibb.co/S6qMxwr/jean.jpg'></img>
                </div>
                <div className='flex-none sm:flex-1 px-4 sm:px-8'>
                    <h1 className='text-4xl font-light my-4'>Denim Jumpsuit</h1>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.</p>
                    <span className='text-3xl'>$ 20</span>
                    <div className='flex w-full sm:w-1/2 justify-between items-center my-6'>
                        <div className='flex'>
                            <span className='mr-2'>Color</span>
                            <div className='mx-1 cursor-pointer' style={{height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'black'}}>
                            </div>
                            <div className='mx-1 cursor-pointer' style={{height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'blue'}}>
                            </div>
                            <div className='mx-1 cursor-pointer' style={{height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'grey'}}>
                            </div>
                        </div>
                        <div>
                            <span>Size</span>
                            <select className="border border-black border-solid p-1 m-1">
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
                    </div>
                    <div className='flex w-full sm:w-1/2 justify-between items-center my-6'>
                        <div className='flex items-center'>
                            <RemoveIcon className='cursor-pointer'/>
                            <span className='flex justify-center items-center border-2 border-teal-600 border-solid w-8 h-8 rounded-lg mx-2'>1</span>
                            <AddIcon className='cursor-pointer'/>
                        </div>
                        <button className='border-2 border-solid border-teal-800 rounded-md p-2'>ADD TO CART</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product;
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Announcement />

            <div>
                <h1 className='text-3xl text-center my-4'>YOUR BAG</h1>
                <div className='flex justify-between items-center p-2 m-4'>
                    <button className='border border-solid border-teal-700 p-2'>CONTINUE SHOPPING</button>
                    <span>
                        <span className='underline mr-2'>Shopping Bag(2)</span>
                        <span className='underline ml-2'>Your Wishlist(0)</span>
                    </span>
                    <button className='text-white bg-teal-700 p-2'>CHECKOUT NOW</button>
                </div>
                <div className='flex'>
                    <div className='pl-6' style={{flex: '3'}}>
                        <div className='flex justify-evenly'>
                            <div className='flex'>
                                <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' style={{width: '200px'}}></img>
                                <div className='flex flex-col justify-between p-4'>
                                    <span>
                                        <strong>Product: </strong>HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <strong>ID: </strong>93813718293
                                    </span>
                                    <div className='bg-slate-600' style={{height: '20px', width: '20px', borderRadius: '50%'}}></div>
                                    <span>
                                        <strong>Size: </strong>XL
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center m-8'>
                                <div className='flex items-center my-2'>
                                    <RemoveIcon className='cursor-pointer'/>
                                    <span className='flex justify-center items-center w-8 h-8 text-2xl'>1</span>
                                    <AddIcon className='cursor-pointer'/>
                                </div>
                                <span className='text-3xl my-2'>$ 20</span>
                            </div>
                        </div>
                        <hr className='border-slate-300'></hr>

                        <div className='flex justify-evenly'>
                            <div className='flex'>
                                <img src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' style={{width: '200px'}}></img>
                                <div className='flex flex-col justify-between p-4'>
                                    <span>
                                        <strong>Product: </strong>HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <strong>ID: </strong>93813718293
                                    </span>
                                    <div className='bg-slate-600' style={{height: '20px', width: '20px', borderRadius: '50%'}}></div>
                                    <span>
                                        <strong>Size: </strong>XL
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center m-8'>
                                <div className='flex items-center my-2'>
                                    <RemoveIcon className='cursor-pointer'/>
                                    <span className='flex justify-center items-center w-8 h-8 text-2xl'>1</span>
                                    <AddIcon className='cursor-pointer'/>
                                </div>
                                <span className='text-3xl my-2'>$ 20</span>
                            </div>
                        </div>
                        <hr className='border-slate-300'></hr>

                        <div className='flex justify-evenly'>
                            <div className='flex'>
                                <img src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' style={{width: '200px'}}></img>
                                <div className='flex flex-col justify-between p-4'>
                                    <span>
                                        <strong>Product: </strong>HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <strong>ID: </strong>93813718293
                                    </span>
                                    <div className='bg-slate-600' style={{height: '20px', width: '20px', borderRadius: '50%'}}></div>
                                    <span>
                                        <strong>Size: </strong>XL
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center m-8'>
                                <div className='flex items-center my-2'>
                                    <RemoveIcon className='cursor-pointer'/>
                                    <span className='flex justify-center items-center w-8 h-8 text-2xl'>1</span>
                                    <AddIcon className='cursor-pointer'/>
                                </div>
                                <span className='text-3xl my-2'>$ 20</span>
                            </div>
                        </div>
                        <hr className='border-slate-300'></hr>

                    </div>
                    <div className='border border-slate-300 border-solid rounded-md flex flex-col p-4 justify-between' style={{flex: '1', height: '60vh'}}>
                        <h1 className='text-center text-3xl'>ORDER SUMMARY</h1>
                        <span>Subtotal $125</span>
                        <span>Estimated Shipping $6</span>
                        <span>Shipping Discount -$6</span>
                        <span>Total $124</span>
                        <button className='border border-solid border-teal-700 rounded-md p-2'>CHECKOUT NOW</button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Cart;
import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity)

    return (
        <div className='p-2 sm:p-3 text-sm sm:text-base'>
            <div className='flex flex-row justify-between'>
                <div className=' flex flex-row items-center'>
                    <span className='hidden sm:inline'>EN</span>
                    <div className='flex flex-row mx-2 border-solid border border-slate-900 rounded justify-center'>
                        <input className='bg-transparent p-1 focus:outline-none w-12 sm:w-48' placeholder='Search'></input>
                        <Search className='m-2'></Search>
                    </div>
                </div>
                <div className=' flex flex-column justify-center items-center text-3xl font-bold'>ONE</div>
                <div className=' flex flex-column justify-end items-center'>
                    <span className='mx-1 sm:m-2'>
                        Register
                    </span> 
                    <span className='mx-1 sm:m-2'>
                        Sign In
                    </span>
                    <Link to="/cart">
                        <div className='flex flex-row p-2'>
                            <Badge badgeContent={quantity} color='primary'>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { Badge } from '@mui/material';

const Navbar = () => {
    return (
        <div className='p-3'>
            <div className='flex flex-row justify-between'>
                <div className='flex-1 flex flex-row items-center'>
                    <span className='hidden sm:inline'>EN</span>
                    <div className='flex flex-row mx-2 border-solid border border-slate-900 rounded justify-center'>
                        <input className='bg-transparent p-1 focus:outline-none w-16 sm:w-48' placeholder='Search'></input>
                        <Search className='m-2'></Search>
                    </div>
                </div>
                <div className='flex-1 flex flex-column justify-center items-center text-3xl font-bold'>ONE</div>
                <div className='flex-1 flex flex-column justify-end items-center'>
                    <span className='m-2'>
                        Register
                    </span> 
                    <span className='m-2'>
                        Sign In
                    </span>
                    <div className='flex flex-row p-2'>
                    <Badge badgeContent={10} color='primary'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
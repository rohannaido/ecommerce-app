import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../App.css';

const AddressForm = ({address, setAddress, showAddressForm, setShowAddressForm, paymentHandler}) => {
    const addressInputHandler = (e) => {
        setAddress({ ...address,
            [e.target.name]: e.target.value });
        }

    const clickHandler = (e) => {
        e.preventDefault();
        paymentHandler();
        setShowAddressForm(false);
    }
    
    return (
        <div className={(!showAddressForm ? "hidden" : "flex") + " overflow-auto fixed z-10 top-0 left-0 justify-center h-full w-full transition"} style={{backgroundColor: "rgba(225, 225, 225, 0.4)"}} >
            <div className="overflow-auto relative bg-white w-3/4 md:w-1/3 sm:w-1/2 p-6 my-2 sm:my-20 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold">Enter address for delivery</h2>
                <div className='cursor-pointer absolute top-2 right-2 flex' onClick={(e) => setShowAddressForm(false)}>
                    <CloseIcon />
                </div>
                <form>
                    <label for='country' className='address-label'>Country</label>
                    <input name='country' className="address-input" onChange={addressInputHandler} />
                    <label for='fullname' className='address-label'>Full name</label>
                    <input name='fullname' className="address-input" onChange={addressInputHandler} />
                    <label for='mobilenumber' className='address-label'>Mobile Number</label>
                    <input name='mobilenumber' className="address-input" onChange={addressInputHandler} />
                    <label for='pincode' className='address-label'>Pincode</label>
                    <input name='pincode' className="address-input" onChange={addressInputHandler} />
                    <label for='flatnumber' className='address-label'>Flat, House no., Building, Company, Apartment</label>
                    <input name='flatnumber' className="address-input" onChange={addressInputHandler}></input>
                    <label for='area' className="address-label">Area, Street, Sector, Village</label>
                    <input name='area' type="text" className="address-input" onChange={addressInputHandler}/>
                    <label for='town' className="address-label">Town/city</label>
                    <input name='town' type="text" className="address-input" onChange={addressInputHandler}/>
                    <label for='state' className='address-label'>State</label>
                    <input name='state' type="text" className="address-input" onChange={addressInputHandler}/>
                    
                    <button className='bg-teal-600 hover:bg-teal-700 text-white font-medium my-4 px-4 py-2 rounded-md' onClick={clickHandler}>Use this address</button>
                </form>
            </div>
        </div>
    )
}

export default AddressForm;
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../redux/apiCalls';

const Login = () => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleLoginClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center" style={{background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center", backgroundSize: "cover"}}>
            <form className="bg-white w-4/5 sm:w-1/4 flex flex-col p-4">
                <h1 className="text-3xl m-2">SIGN IN</h1>
                <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button className="w-1/3 bg-teal-800 text-white px-4 py-2 m-2 disabled:bg-gray-600 disabled:text-gray-800" onClick={handleLoginClick} disabled={isFetching}>LOGIN</button>
                {error && <span className="mx-2 text-red-600">Something went wrong...</span>}
                <span className="mx-2 underline cursor-pointer">Do not remember your password?</span>
                <Link to="/register">
                    <span className="mx-2 underline cursor-pointer">Create a new Account?</span> 
                </Link>
            </form>
        </div>
    )
}

export default Login;
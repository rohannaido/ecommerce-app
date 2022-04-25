
const Login = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center" style={{background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center", backgroundSize: "cover"}}>
            <div className="bg-white w-1/4 flex flex-col p-4">
                <h1 className="text-3xl m-2">SIGN IN</h1>
                <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="username"></input>
                <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="password"></input>
                <button className="w-1/3 bg-teal-800 text-white px-4 py-2 m-2">LOGIN</button>
                <span className="mx-2 underline cursor-pointer">Do not remember your password?</span>
                <span className="mx-2 underline cursor-pointer">Create a new Account?</span>
            </div>
        </div>
    )
}

export default Login;
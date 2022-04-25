

const Register = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center" style={{background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center", backgroundSize: "cover"}}>
            <div className="w-2/5 p-4 bg-white flex flex-wrap">
                <h1 className="text-3xl m-2">CREATE AN ACCOUNT</h1>
                <div className="flex flex-wrap justify-center">
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="name"></input>
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="last name"></input>
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="username"></input>
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="email"></input>
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="password"></input>
                    <input className="flex-1 p-2 m-2 border border-slate-500 border-solid rounded-sm" placeholder="confirm password"></input>
                    <p className="m-2">By creating an account, I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong></p>
                </div>
                <button className="w-1/3 bg-teal-800 text-white px-4 py-2">CREATE</button>
            </div>
        </div>
    )
}

export default Register;
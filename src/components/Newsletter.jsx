import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Newsletter = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-emerald-200" style={{height: '60vh'}}>
            <h1 className="text-6xl sm:text-8xl font-semibold py-4">
                Newsletter
            </h1>
            <p className='p-4 text-center'>
                Get timely updates from your favourite products
            </p>
            <div className='w-4/5 sm:w-1/2 flex justify-between bg-white'>
                <input className='outline-none pl-4 p-2' style={{flex: '10'}} placeholder="Your email..."></input>
                <button className='hover:bg-slate-700 hover:text-white w-6' style={{flex: '1'}}>
                    <SendOutlinedIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;
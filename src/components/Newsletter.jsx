import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Newsletter = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-emerald-300" style={{height: '60vh'}}>
            <h1 className="text-8xl font-semibold py-4">
                Newsletter
            </h1>
            <p className='py-4'>
                Get timely updates from your favourite products
            </p>
            <div className='flex justify-between bg-white' style={{width: '50%'}}>
                <input className='outline-none pl-4 p-2' style={{flex: '10'}}></input>
                <button className='hover:bg-slate-700 hover:text-white' style={{flex: '1'}}>
                    <SendOutlinedIcon />
                </button>
            </div>
        </div>
    )
}

export default Newsletter;
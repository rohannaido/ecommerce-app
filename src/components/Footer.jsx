import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row" style={{height: '50vh'}}>
            <div className="flex-1 p-4 flex flex-col">
                <h1 className='text-4xl font-bold my-2'>
                    ONE
                </h1>
                <p className='my-4'>
                MuscleBlaze® was founded in 2012 with the idea of providing India with sports nutrition supplements that are specifically focused on Indian customer needs and listens to their sentiments day in day out.
                </p>
                <div className='flex justify-center'>
                    <span className='m-4'>
                        <FacebookOutlinedIcon />
                    </span>
                    <span className='m-4'>
                        <InstagramIcon />
                    </span>
                    <span className='m-4'>
                        <TwitterIcon />
                    </span>
                </div>
            </div>

            <div className="flex-1 p-4 hidden sm:flex flex-col">
                <h3 className='text-2xl my-4'>Useful Links</h3>
                <ul className='footer-ul flex flex-row flex-wrap '>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Whey Protien</li>
                    <li>Pre Workout</li>
                    <li>Plant Protien</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>

            <div className="flex-1 p-4 flex flex-col bg-slate-50 sm:bg-transparent">
                <h3 className='text-2xl my-4'>Contact</h3>
                <div className='my-2'>
                    <LocationOnIcon style={{marginRight: '10px'}}/>
                    Bright Lifecare Pvt Ltd. Head Office, 3rd Floor, Parsvnath Arcadia, T - 01, M G Road Sector 14, Gurgaon - 122001, Haryana, India
                </div>
                <div className='my-2'>
                    <PhoneIcon style={{marginRight: '10px'}}/>
                    +91 85 277 32 632
                </div>
                <div className='my-2'>
                    <EmailIcon style={{marginRight: '10px'}}/>
                    info@Muscleblaze.com
                </div>
            </div>
        </div>
    )
}

export default Footer;
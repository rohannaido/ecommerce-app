import {useState} from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from '../data.js'
import { Link } from 'react-router-dom';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1: 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    }

    return (
        <div className="hidden relative overflow-hidden sm:flex" style={{height: "50vh"}}>
            <div className='flex absolute inset-y-0 m-auto justify-center items-center bg-white cursor-pointer opacity-50 z-10' style={{height:'50px', width:'50px', borderRadius: '50%', left: '10px'}}
            onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </div>
            <div className="h-full flex flex-row" 
            style={{transform: "translateX(-"+ 100 * slideIndex + "vw)",
            transition: 'all 0.3s ease'}}>
                {sliderItems.map((item) => (
                    <Link to="/products/whey">
                        <div className="flex flex-row justify-between flex-wrap h-full w-screen" style={{backgroundColor: item.bg}}>
                            <div className="h-full flex justify-center items-center" style={{maxWidth: '90%', flex: '1'}}>
                                <img class="h-full" src={item.image} alt='whey-protien'></img>
                            </div>
                            <div className="flex flex-col justify-center" style={{flex: '2'}}>
                                <h1 className="text-6xl font-bold">{item.title}</h1>
                                <p className='uppercase tracking-wide' style={{margin: '50px 0'}}>{item.desc}</p>
                                <button className="w-max border-2 border-solid rounded-lg border-teal-800 p-2 hover:bg-teal-800 hover:text-white">SHOP MORE</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex absolute inset-y-0 m-auto justify-center items-center bg-white cursor-pointer opacity-50 z-10' style={{height:'50px', width:'50px', borderRadius: '50%', right: '10px'}}
            onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider;
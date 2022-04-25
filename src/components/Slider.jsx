import {useState} from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from '../data.js'


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
        <div className="hidden relative h-screen overflow-hidden sm:flex">
            <div className='flex absolute inset-y-0 m-auto justify-center items-center bg-white cursor-pointer opacity-50 z-10' style={{height:'50px', width:'50px', borderRadius: '50%', left: '10px'}}
            onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </div>
            <div className="h-full flex flex-row" 
            style={{transform: "translateX(-"+ 100 * slideIndex + "vw)",
            transition: 'all 0.3s ease'}}>
                {sliderItems.map((item) => (
                    <div className="flex flex-row flex-wrap h-screen w-screen" style={{backgroundColor: item.bg}}>
                        <div className="flex-1 flex justify-center items-center" style={{minWidth: '50%', maxWidth: '90%'}}>
                            <img src={item.image} alt='whey-protien'></img>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h1 className="text-6xl font-bold">{item.title}</h1>
                            <p className='uppercase tracking-wide' style={{margin: '50px 0'}}>{item.desc}</p>
                            <button className="w-max border-2 border-solid rounded-lg border-teal-800 p-2 hover:bg-teal-800 hover:text-white">SHOP MORE</button>
                        </div>
                    </div>
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
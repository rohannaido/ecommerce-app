import { ShoppingCartOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from "react";

const Product = ({item}) => {
    const [ style, setStyle ] = useState("opacity-0");
    

    return (
        <div className="relative flex-1 bg-teal-50 m-3 flex justify-center items-center"
        onMouseEnter={() => setStyle("opacity-100")}
        onMouseLeave={() => setStyle("opacity-0")}>
            <div style={{width: '300px'}}>
                <img className="h-full w-full" src={item.img} alt="product"></img>
            </div>
            <div className={style + " absolute top-0 left-0 h-full w-full flex justify-center items-center z-10 bg-slate-800 bg-opacity-20"} style={{transition: 'all 0.2s ease'}}>
                <div className="m-2 bg-white h-10 w-10 flex justify-center items-center hover:scale-110 cursor-pointer" style={{borderRadius: '50%'}}>
                    <ShoppingCartOutlined />
                </div>
                <div className="m-2 bg-white h-10 w-10 flex justify-center items-center hover:scale-110 cursor-pointer" style={{borderRadius: '50%'}}>
                    <SearchOutlinedIcon />
                </div>
                <div className="m-2 bg-white h-10 w-10 flex justify-center items-center hover:scale-110 cursor-pointer" style={{borderRadius: '50%'}}>
                    <FavoriteBorderOutlinedIcon  />
                </div>
            </div>
        </div>
    )
}

export default Product;
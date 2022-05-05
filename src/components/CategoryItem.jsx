import { Link } from "react-router-dom";

const CategoryItem = ({item}) => {
    return (
        <div className="flex-1 relative m-3">
            <Link to={`products/${item.cat}`}>
                <div className="h-48 sm:h-72 ">
                    <img className="w-full h-full object-cover" src={item.img} alt="category"></img>
                </div>
                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-4xl font-bold text-center">
                        {item.title}
                    </h1>
                    <button className="m-3 p-3 bg-white text-xl text-slate-800 hover:bg-slate-900 hover:text-white">SHOP NOW</button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem;
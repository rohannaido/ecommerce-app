import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Categories = () => {
    return (
        <div className="flex">
            {categories.map((item) => (
                <CategoryItem item={item} />
            ))
            }
        </div>
    )
}

export default Categories;
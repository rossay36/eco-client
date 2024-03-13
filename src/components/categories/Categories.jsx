import "./Categories.css";
import { categories } from "../../Data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;

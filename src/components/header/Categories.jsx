import categories from "../../constants/categories";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <div className="scrollbar-small flex items-center gap-2 overflow-x-auto overflow-y-hidden">
      {categories.map((item, i) => (
        <CategoryBox key={i} item={item} />
      ))}
    </div>
  );
};

export default Categories;

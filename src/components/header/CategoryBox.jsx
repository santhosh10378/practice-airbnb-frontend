import useFilters from "../../hooks/useFilters";

const CategoryBox = ({ item }) => {
  const { queryParams, updateParams } = useFilters();

  const selectedCategory = queryParams.category === item.label;

  return (
    <div
      onClick={() => updateParams({ category: item.label })}
      className={`flex cursor-pointer flex-col items-center gap-2 p-4 text-sm font-medium transition hover:scale-105 hover:text-black ${
        selectedCategory
          ? "border-b-2 border-black text-black"
          : "text-neutral-500"
      }`}
    >
      <span>{item.label}</span>
      <item.icon size={20} />
    </div>
  );
};

export default CategoryBox;

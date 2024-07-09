import categories from "../../../../constants/categories";
import Heading from "../../../Heading";

const CategoryStep = ({ register, watch, errors }) => {
  const category = watch("category");
  console.log(category);

  return (
    <div className="space-y-4">
      <Heading variant="categoryInput" />

      <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[400px] scrollbar-small pr-2">
        {categories.map((item) => (
          <div key={item.label}>
            <label>
              <div
                className={`flex items-center gap-4 p-2 border-[1.5px] rounded-md text-base font-medium  cursor-pointer transition ${
                  category === item.label
                    ? "border-black bg-gray-100 text-black"
                    : "text-neutral-500"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>

              <input
                type="radio"
                value={item.label}
                hidden
                {...register("category")}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStep;

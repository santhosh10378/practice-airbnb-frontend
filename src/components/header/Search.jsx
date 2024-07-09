import { FiSearch } from "react-icons/fi";
import useModals from "../../hooks/useModals";

const Search = () => {
  const { toggleSearchModal } = useModals();

  return (
    <div className="flex w-full items-center justify-center text-sm font-medium md:w-auto  lg:flex-2">
      <div
        onClick={toggleSearchModal}
        className="hidden cursor-pointer items-center rounded-full border py-2 transition hover:shadow-sm md:flex"
      >
        <div className="px-4">Anywhere</div>
        <div className="border-x px-4">Any week</div>
        <div className="flex items-center gap-2 px-4 pr-2">
          <span className="font-normal text-gray-500">Add guests</span>
          <div className="rounded-full bg-rose-500 p-[6px] text-white">
            <FiSearch size={14} />
          </div>
        </div>
      </div>

      <div
        onClick={toggleSearchModal}
        className="flex w-full items-center gap-4 rounded-full border p-1 pl-3 transition hover:shadow-sm md:hidden"
      >
        <FiSearch size={20} />
        <div className="flex flex-col">
          <span className="text-xs">Where to go?</span>

          <span className="text-[10px] font-normal">
            Anywhere・Any week・Add guests
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;

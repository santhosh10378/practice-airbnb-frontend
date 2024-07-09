import Heading from "../../../Heading";
import { TbPhotoPlus } from "react-icons/tb";

const ImagesStep = ({ register, errors, watch }) => {
  const listingImages = watch("listingImages");

  return (
    <div className="space-y-4">
      <Heading variant="imagesInput" titleClass="text-sm" />

      <div>
        <label>
          <input type="file" multiple hidden {...register("listingImages")} />

          <div className="border border-dashed border-neutral-300 p-3 text-neutral-500 rounded-lg flex flex-col gap-2 items-center justify-center cursor-pointer">
            <TbPhotoPlus size={26} />
            <p className="">Add your Listing Photos</p>
          </div>
        </label>
      </div>

      <div>
        {listingImages && listingImages.length > 0 && (
          <div className="grid grid-cols-2 gap-2 max-h-[250px] overflow-y-auto scrollbar-small pr-2">
            {Array.from(listingImages).map((file, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Listing Image"
                  className="object-cover w-full h-full aspect-video rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesStep;

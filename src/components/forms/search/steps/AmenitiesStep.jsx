import Heading from "../../../Heading";
import Counter from "./Counter";

const AmenitiesStep = ({ register, watch, setValue }) => {
  const counters = [
    { id: "guestCount", variant: "guests" },
    { id: "bedroomCount", variant: "bedrooms" },
    { id: "bathroomCount", variant: "bathrooms" },
    { id: "bedCount", variant: "beds" },
  ];

  return (
    <div className="space-y-4">
      <Heading variant="info" />

      {counters.map((counter, index) => (
        <div key={index} className="space-y-2 py-2">
          <Counter
            variant={counter.variant}
            register={register}
            id={counter.id}
            watch={watch}
            setValue={setValue}
          />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AmenitiesStep;

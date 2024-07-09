import Heading from "../../../Heading";
import Input from "../../../elements/Input";

const LocationStep = ({ register, errors, watch, setValue }) => {
  return (
    <div className="space-y-4">
      <Heading variant="locationInput" titleClassName="text-sm" />

      <Input
        register={register}
        errors={errors}
        type="text"
        label="City"
        id="city"
      />

      <Input
        register={register}
        errors={errors}
        type="text"
        label="State"
        id="state"
      />

      <Input
        register={register}
        errors={errors}
        type="text"
        label="Country"
        id="country"
      />
    </div>
  );
};

export default LocationStep;

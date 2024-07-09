import { formatCurrency } from "../../../../utils/formatters";
import Heading from "../../../Heading";
import Input from "../../../elements/Input";

const PriceStep = ({ register, errors, watch }) => {
  const price = watch("price");
  return (
    <div className="space-y-4">
      <Heading variant="price" />

      <Input
        register={register}
        errors={errors}
        type="number"
        label="Price"
        id="price"
      />

      {price > 0 && (
        <p className="mt-2 text-right text-xl font-medium">
          {formatCurrency(price)}
        </p>
      )}
    </div>
  );
};

export default PriceStep;

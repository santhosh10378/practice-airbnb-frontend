import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../elements/Button";
import LocationStep from "./steps/LocationStep";
import AmenitiesStep from "./steps/AmenitiesStep";
import PriceStep from "./steps/PriceStep";
import useFilters from "../../../hooks/useFilters";
import useModals from "../../../hooks/useModals";

const ListingSearchForm = () => {
  const [step, setStep] = useState(0);
  const { updateParams } = useFilters();
  const { toggleSearchModal } = useModals();

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const steps = [
    <LocationStep
      register={register}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />,

    <AmenitiesStep
      register={register}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />,
    <PriceStep
      register={register}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />,
  ];

  const renderBody = () => {
    return steps[step];
  };

  const onSubmit = async (data) => {
    console.log(data);
    updateParams(data);
    toggleSearchModal();
  };

  const onBack = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const onNext = () => {
    if (step < steps.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const onNextLabel = useMemo(() => {
    return step === steps.length - 1 ? "Search" : "Next";
  }, [step, steps.length]);

  return (
    <form
      className="flex flex-col gap-5 justify-between h-[93%] "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>{renderBody()}</div>
      <div className="flex items-center justify-end gap-2">
        {step !== 0 && (
          <Button type="button" onClick={onBack} variant="secondary">
            Back
          </Button>
        )}
        <Button
          type={step === steps.length ? "submit" : "button"}
          onClick={onNext}
        >
          {onNextLabel}
        </Button>
      </div>
    </form>
  );
};

export default ListingSearchForm;

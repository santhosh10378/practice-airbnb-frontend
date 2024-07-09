import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../elements/Button";
import TitleStep from "./steps/TitleStep";
import LocationStep from "./steps/LocationStep";
import CategoryStep from "./steps/CategoryStep";
import AmenitiesStep from "./steps/AmenitiesStep";
import ImagesStep from "./steps/ImagesStep";
import PriceStep from "./steps/PriceStep";
import useMutation from "../../../hooks/useMutation";
import customFormData from "../../../utils/customFormData";

const NewListingForm = () => {
  const [step, setStep] = useState(0);
  const { mutateData } = useMutation(0);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const steps = [
    <TitleStep
      register={register}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />,
    <CategoryStep
      register={register}
      watch={watch}
      errors={errors}
      setValue={setValue}
    />,
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
    <ImagesStep
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
    const formData = customFormData(data);
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    await mutateData({
      method: "POST",
      url: "/listings",
      multipart: true,
      requestData: formData,
    });
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
    return step === steps.length - 1 ? "Create Listing" : "Next";
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

export default NewListingForm;

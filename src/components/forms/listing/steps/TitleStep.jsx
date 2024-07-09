import { useRef } from "react";
import ReactQuill from "react-quill";
import Input from "../../../elements/Input";

import "react-quill/dist/quill.snow.css";
import Heading from "../../../Heading";

const TitleStep = ({ register, errors, watch, setValue }) => {
  const descRef = useRef();
  const handleQuillChange = (content) => {
    setValue("description", content);
  };

  return (
    <div className="space-y-4 overflow-y-auto max-h-[480px] scrollbar-small px-1 pt-2">
      <Heading variant="infoInput" titleClassName="text-sm" />

      <Input
        register={register}
        errors={errors}
        type="text"
        label="Title"
        id="title"
      />

      <ReactQuill
        theme="snow"
        value={watch("description")}
        onChange={handleQuillChange}
        ref={descRef}
        className="custom-quill"
      />
      {errors.description && (
        <p className="mt-1 text-xs font-medium text-red-500">
          {errors.description.message}
        </p>
      )}
    </div>
  );
};

export default TitleStep;

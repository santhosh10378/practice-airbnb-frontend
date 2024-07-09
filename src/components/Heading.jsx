import { twMerge } from "tailwind-merge";
import headingTexts from "../constants/headingTexts";

const Heading = ({
  variant,
  className = "",
  titleClass = "",
  subtitleClass = "",
}) => {
  const { title, subtitle } = headingTexts[variant];

  if (!title || !subtitle) {
    console.error(`Heading variant "${variant}" not found in headingTexts.`);
    return null; // or some fallback JSX
  }

  return (
    <div className={twMerge(className)}>
      <h2 className={twMerge("text-lg font-medium", titleClass)}>{title}</h2>
      <p className={twMerge("text-sm text-gray-500", subtitleClass)}>
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;

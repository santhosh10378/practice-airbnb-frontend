import usePageInfo from "../hooks/usePageInfo";

const Container = ({ children }) => {
  const { isSingleListingPage } = usePageInfo();

  return (
    <div
      className={`mx-auto w-full px-4 md:px-2 md:max-w-[704px] lg:max-w-[960px] ${
        isSingleListingPage
          ? "xl:max-w-[1136px]"
          : "xl:max-w-[1280px] 2xl:max-w-[2376px]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;

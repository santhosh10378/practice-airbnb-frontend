import { useLocation, useNavigate } from "react-router-dom";

const useFilters = () => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const queryParams = Object.fromEntries(params.entries());

  const updateParams = (item) => {
    let newParams = { ...queryParams };

    Object.keys(item).forEach((key) => {
      if (item[key] === queryParams[key]) {
        delete newParams[key];
      } else {
        if (item[key].toString() !== "NaN") {
          newParams[key] = item[key];
        }
      }
    });

    // Create a new search string from the updated parameters
    const newSearchString = new URLSearchParams(newParams).toString();

    // Navigate to the new URL with the updated query parameters
    navigate(`${pathname}?${newSearchString}`);
  };

  return { queryParams, updateParams };
};

export default useFilters;

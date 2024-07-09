import { useMemo } from "react";
import { formatCount } from "../utils/formatters";
import { eachDayOfInterval, differenceInBusinessDays } from "date-fns";

const useFormattedListing = (listing, state) => {
  const guestText = formatCount(listing?.guestCount, "guest", "guests");
  const bedroomText = formatCount(listing?.bedroomCount, "bedroom", "bedrooms");
  const bedText = formatCount(listing?.bedCount, "bed", "beds");
  const bathroomText = formatCount(
    listing?.bathroomCount,
    "bathroom",
    "bathrooms"
  );

  const differenceInDates = differenceInBusinessDays(
    state[0].endDate,
    state[0].startDate
  );
  const totalPrice = differenceInDates * listing?.price;

  const disabledDates = useMemo(() => {
    let dates = [];

    listing?.reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [listing?.reservations]);

  return {
    guestText,
    bedroomText,
    bedText,
    bathroomText,
    totalPrice,
    disabledDates,
  };
};

export default useFormattedListing;

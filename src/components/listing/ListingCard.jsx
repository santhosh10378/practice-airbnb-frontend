import { formatCurrency } from "../../utils/formatters";
import { format } from "date-fns";
import ListingImage from "./ListingImage";
import Button from "../elements/Button";
import useMutation from "../../hooks/useMutation";

const ListingCard = ({ listing, reservation, myListing }) => {
  const { mutateData } = useMutation();
  return (
    <div className="w-full flex flex-col gap-2 mb-4">
      <ListingImage listing={listing} />

      <div className="flex flex-col gap-2">
        {!reservation && (
          <>
            <p className="truncate ">{`${listing?.city}, ${listing?.state}`}</p>
            <p className="font-semibold text-lg truncate">
              {`${formatCurrency(listing?.price)} `}
              <span className="font-normal text-sm">per night</span>
            </p>
          </>
        )}

        {reservation && (
          <>
            <p className="truncate">
              {" "}
              {`${format(reservation?.startDate, "MMM dd")} - ${format(
                reservation?.endDate,
                "MMM dd"
              )}`}
            </p>
            <p className="font-semibold text-lg">
              {`${formatCurrency(reservation?.totalPrice)} `}
            </p>
            <Button
              onClick={async () => {
                await mutateData({
                  method: "DELETE",
                  url: `/reservations/${reservation?.id}`,
                });
              }}
              className="p-2"
            >
              Cancel Reservation
            </Button>
          </>
        )}

        {myListing && (
          <>
            <Button
              onClick={async () => {
                await mutateData({
                  method: "DELETE",
                  url: `/listings/${listing?.id}`,
                });
              }}
              className="p-2"
            >
              Delete Listing
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ListingCard;

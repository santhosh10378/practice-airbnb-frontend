import { useParams } from "react-router-dom";
import { useState } from "react";

import Avatar from "../components/Avatar";
import Button from "../components/elements/Button";
import ListingGrid from "../components/single-listing/ListingGrid";
import Reservation from "../components/single-listing/Reservation";

import useFetch from "../hooks/useFetch";
import useMenus from "../hooks/useMenus";
import useMutation from "../hooks/useMutation";
import useFormattedListing from "../hooks/useFormattedListing";

import { formatCurrency } from "../utils/formatters";

const SingleListing = () => {
  const params = useParams();
  const { isReserveMenuOpen, toggleReserveMenu } = useMenus();
  const { data: listing } = useFetch({ url: `/listings/${params?.id}` });

  const { mutateData } = useMutation();
  const startDate = new Date();
  const endDate = new Date();

  // Set endDate to tomorrow
  endDate.setDate(startDate.getDate() + 1);

  const [state, setState] = useState([
    {
      startDate,
      endDate,
      key: "selection",
    },
  ]);

  const {
    guestText,
    bedroomText,
    bedText,
    bathroomText,
    totalPrice,
    disabledDates,
  } = useFormattedListing(listing, state);

  const onReserve = async () => {
    await mutateData({
      url: "/reservations",
      method: "POST",
      requestData: {
        startDate: state[0].startDate,
        endDate: state[0].endDate,
        totalPrice,
        listingId: listing?.id,
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{listing?.title}</h2>
      <ListingGrid listing={listing} />
      <p>{`${guestText}・${bedroomText}・${bedText}・${bathroomText}`}</p>

      <div className="flex flex-col lg:flex-row gap-28">
        <div className="flex-[2] flex flex-col gap-5">
          <div className="py-3 border-y flex items-center gap-3">
            <Avatar
              image={listing?.host?.profileImg}
              className="size-16"
              iconSize={40}
            />
            <div>
              <p className="font-medium">Hosted By</p>
              <p className=" text-neutral-500 text-sm">{listing?.host?.name}</p>
            </div>
          </div>

          <div className="text-justify">
            <h3 className="text-xl font-semibold mb-1">Description</h3>
            <div dangerouslySetInnerHTML={{ __html: listing?.description }} />
          </div>
        </div>
        <div className="flex-[1]">
          <div className="hidden lg:block">
            <Reservation
              listing={listing}
              state={state}
              setState={setState}
              totalPrice={totalPrice}
              disabledDates={disabledDates}
              onReserve={onReserve}
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden sticky bottom-0 left-0 bg-white z-50 w-full p-5 flex items-center justify-between">
        <p className="text-xl font-semibold">
          {formatCurrency(listing?.price)}
        </p>
        <Button
          onClick={toggleReserveMenu}
          className={`min-w-[20%] w-max ${
            isReserveMenuOpen ? "bg-black text-white" : ""
          }`}
        >
          {isReserveMenuOpen ? "Close" : "Continue"}
        </Button>
      </div>

      {isReserveMenuOpen && (
        <div className="lg:hidden sticky bottom-0 left-0 bg-white z-[40] w-full h-auto p-5 pb-36 flex items-center justify-center">
          <Reservation
            listing={listing}
            state={state}
            setState={setState}
            totalPrice={totalPrice}
            disabledDates={disabledDates}
            onReserve={onReserve}
          />
        </div>
      )}
    </div>
  );
};

export default SingleListing;

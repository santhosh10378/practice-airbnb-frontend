import { DateRange } from "react-date-range";

import { formatCurrency } from "../../utils/formatters";
import Button from "../elements/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Reservation = ({
  listing,
  setState,
  state,
  totalPrice,
  disabledDates,
  onReserve,
}) => {
  return (
    <div className="border rounded-xl">
      <div className="p-3">
        <p className="font-medium text-2xl">
          {formatCurrency(listing?.price)}{" "}
          <span className="font-normal text-base text-neutral-500">
            per night
          </span>
        </p>
      </div>
      <hr />
      <div className="p-3">
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          rangeColors={["#000000"]}
          minDate={new Date()}
          disabledDates={disabledDates}
        />
        <Button onClick={onReserve}>Reserve</Button>
      </div>
      <hr />
      <div className="p-3 flex items-center justify-between ">
        <p>Total</p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Reservation;

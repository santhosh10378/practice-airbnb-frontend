import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
  },
  {
    label: "Windmills",
    icon: GiWindmill,
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
  },
  {
    label: "Countryside",
    icon: TbMountain,
  },
  {
    label: "Pools",
    icon: TbPool,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    icon: FaSkiing,
  },
  {
    label: "Castles",
    icon: GiCastle,
  },
  {
    label: "Camping",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    icon: BsSnow,
  },

  {
    label: "Cave",
    icon: GiCaveEntrance,
  },
  {
    label: "Desert",
    icon: GiCactus,
  },
  {
    label: "Barns",
    icon: GiBarn,
  },
  {
    label: "Lux",
    icon: IoDiamond,
  },
];

export default categories;

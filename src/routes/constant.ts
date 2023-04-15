import { DynamicScreen, Home } from "../screens";
import {
  IcAbout,
  IcAward,
  IcDashboard,
  IcMoney,
  IcOrder,
  IcPartner,
  IcProduct,
  IcTeam,
} from "../assets/fileIcon";

export const routesData = [
  {
    path: "/",
    title: "Dashboard",
    screen: DynamicScreen,
    icon: IcDashboard,
  },
  {
    path: "/other",
    title: "Other",
    screen: DynamicScreen,
    icon: IcOrder,
  },
  {
    path: "/team",
    title: "Team Member",
    screen: DynamicScreen,
    icon: IcTeam,
  },
  {
    path: "/partner",
    title: "Partner",
    screen: DynamicScreen,
    icon: IcPartner,
  },
  {
    path: "/product",
    title: "Product Listing",
    screen: DynamicScreen,
    icon: IcProduct,
  },
  {
    path: "/awards",
    title: "Awards & Honours",
    screen: DynamicScreen,
    icon: IcAward,
  },
  {
    path: "/aboutUs",
    title: "About Us",
    screen: Home,
    icon: IcAbout,
  },
  {
    path: "/payment",
    title: "Payment Info",
    screen: DynamicScreen,
    icon: IcMoney,
  },
];

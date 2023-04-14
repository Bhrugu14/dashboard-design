import Logo from "../../assets/images/AT_logo.png";
import IcHelp from "../../assets/icons/ic-help.svg";
import {
  IcAbout,
  IcAward,
  IcDashboard,
  IcMoney,
  IcOrder,
  IcPartner,
  IcProduct,
  IcTeam,
} from "../../assets/fileIcon";

export const SidebarMenu = [
  {
    name: "Dashboard",
    icon: IcDashboard,
  },
  {
    name: "Order",
    icon: IcOrder,
  },
  {
    name: "Team Members",
    icon: IcTeam,
  },
  {
    name: "Partner",
    icon: IcPartner,
  },
  {
    name: "Product Listing",
    icon: IcProduct,
  },
  {
    name: "Awards & Honours",
    icon: IcAward,
  },
  {
    name: "About Us",
    icon: IcAbout,
  },
  {
    name: "Payment info",
    icon: IcMoney,
  },
];
export { Logo, IcHelp };

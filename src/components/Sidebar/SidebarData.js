import { HomeOutlined, SettingsOutlined } from "@material-ui/icons";
import { BiSupport } from "react-icons/bi";
import * as RiIcons from 'react-icons/ri';




export const SidebarData = [
    {
        label: "Dashboard",
        icon: <HomeOutlined />,
        to: "/",
         iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
        subMenus: [
          {
          name: 'Commerce',
          to: '/'
        },
      {
        name: 'Investment',
        to: '/investment'
      }
    ]
    },
    {
        label: "Support",
        icon: <BiSupport style={{fontSize: 22}} />,
        to: "/support",
    },
    {
        label: "Settings",
        icon: <SettingsOutlined />,
        to: "/settings",
    },
];


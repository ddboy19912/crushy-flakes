import { DashboardOutlined, SettingsOutlined } from '@material-ui/icons';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import MessageIcon from '@mui/icons-material/Message';
import { BiSupport } from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    label: 'Dashboard',
    icon: <DashboardOutlined />,
    to: '/',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    label: 'Analytics',
    icon: <AnalyticsOutlinedIcon />,
    to: '/analytics',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenus: [
      {
        name: 'Customers',
        to: '/analytics/customers',
      },
      {
        name: 'Sales',
        to: '/analytics/sales',
      },
      {
        name: 'Downloads',
        to: '/analytics/downloads',
      },
      {
        name: 'Investors',
        to: '/analytics/investors',
      },
    ],
  },
  {
    label: 'Campaigns',
    icon: <CampaignOutlinedIcon />,
    to: '/campaign',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenus: [
      {
        name: 'Create a new Campaign',
        to: '/create-campaign',
      },
      {
        name: 'Campaign Analytics',
        to: '/campaign',
      },
    ],
  },
  {
    label: 'Bulk Uploads',
    icon: <DriveFolderUploadIcon />,
    to: '/uploads',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    // subMenus: [
    //   {
    //     name: 'Commerce',
    //     to: '/',
    //   },
    //   {
    //     name: 'Investment',
    //     to: '/investment',
    //   },
    // ],
  },
  {
    label: 'Content Management',
    icon: <LibraryBooksOutlinedIcon />,
    to: '/cms',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenus: [
      {
        name: 'Email Templates',
        to: '/cms/email-template',
      },
      {
        name: 'Pages',
        to: '/cms/pages',
      },
      {
        name: 'Media',
        to: '/cms/media',
      },
    ],
  },
  {
    label: 'Messages',
    icon: <MessageIcon />,
    to: '/messages',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    label: 'Team Management',
    icon: <GroupIcon />,
    to: '/teams',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    label: 'Support',
    icon: <BiSupport style={{ fontSize: 22 }} />,
    to: '/support',
  },
  {
    label: 'Settings',
    icon: <SettingsOutlined />,
    to: '/settings',
  },
  {
    label: 'Log Out',
    icon: <LogoutIcon />,
    to: '#',
  },
];

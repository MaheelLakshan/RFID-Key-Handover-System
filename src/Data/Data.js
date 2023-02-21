// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from '@iconscout/react-unicons';

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from '@iconscout/react-unicons';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

// Recent Card Imports
import img1 from '../Assets/img1.png';

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: 'Dashboard',
  },
  {
    icon: UilClipboardAlt,
    heading: 'History',
  },
  {
    icon: UilUsersAlt,
    heading: 'Add Users',
  },
  {
    icon: UilPackage,
    heading: 'Add Keys',
  },
];

//usual compactcard
export const cardsDataUsual = [
  {
    title: 'All Users',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    value: '22',
  },
  {
    title: 'All Keys',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    value: '12',
  },
];

// Analytics Cards Data..this is to be handover
export const cardsData = [
  {
    title: 'All Users',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    value: '22',
  },
  {
    title: 'All Keys',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    value: '12',
  },
  {
    title: 'To Be Handover',
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    barValue: 40,
    value: '12',
    png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: 'Maheel',
    noti: 'Taken the DEIE Undergraguate lab key 1',
    time: '25 seconds ago',
  },
  // {
  //   img: img2,
  //   name: 'Lakshan',
  //   noti: 'Taken the Sport unit key',
  //   time: '30 minutes ago',
  // },
];

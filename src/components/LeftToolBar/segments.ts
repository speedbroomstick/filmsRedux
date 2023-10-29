import { ISegmentBar } from "../../types/films.types";
import {AiFillHome, AiFillCompass, AiFillFire, AiFillSetting, AiFillLock} from 'react-icons/ai'
import {IoMdRefreshCircle} from 'react-icons/io'
import {IoLogOutSharp} from 'react-icons/io5'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {MdFamilyRestroom} from 'react-icons/md'
import {FaWandMagicSparkles, FaEarthAmericas} from 'react-icons/fa6'

export const menuSegments: ISegmentBar[] = [
    {
      id: 1,
      label: 'Home',
      icon: AiFillHome,
    },
    {
      id: 2,
      label: 'Discovery',
      icon: AiFillCompass,
    },
    {
        id: 3,
        label: 'Fresh movies',
        icon: IoMdRefreshCircle,
      },
      {
        id: 4,
        label: 'Trending now',
        icon: AiFillFire,
      },
  ];
  export const popularSegments: ISegmentBar[] = [
    {
      id: 5,
      label: 'Comedy',
      icon: BsFillEmojiSmileFill,
    },
    {
      id: 6,
      label: 'Cartoons',
      icon: MdFamilyRestroom,
    },
    {
        id: 7,
        label: 'Fantasy',
        icon: FaWandMagicSparkles,
      },
      {
        id: 8,
        label: 'Biography',
        icon: FaEarthAmericas,
      },
  ];
  export const generalSegments: ISegmentBar[] = [
    {
      id: 9,
      label: 'Profile',
      icon: AiFillSetting,
    },
    {
      id: 10,
      label: 'Logout',
      icon: IoLogOutSharp,
    },
    {
        id: 11,
        label: 'Admin panel',
        icon: AiFillLock,
      },
  ];
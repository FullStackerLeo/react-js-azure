import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PasswordIcon from '@mui/icons-material/Password';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';


import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import PoolIcon from '@mui/icons-material/Pool';
import SurfingIcon from '@mui/icons-material/Surfing';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import HeadsetIcon from '@mui/icons-material/Headset';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import SleddingIcon from '@mui/icons-material/Sledding';



//菜单的测试数据
const sideMenuConfigData = [
    {
        id: "mern", title: "MERN", icon: PersonIcon, children: [
            { id: "react", title: "React", icon: VerifiedUserIcon },
            { id: "express", title: "Express", icon: EmojiTransportationIcon },
            { id: "Mongo", title: "Mongo", icon: VpnKeyIcon },
            { id: "mernothers", title: "Others", icon: HealthAndSafetyIcon },
        ]
    },

    {
        id: "python", title: "Python", icon: FeaturedVideoIcon, children: [
            { id: "core", title: "Core", icon: HeadsetIcon },
            { id: "datastructure", title: "Data Structure", icon: ReplyAllIcon },
            { id: "django", title: "Django", icon: DataUsageIcon },
        ]
    },

    {
        id: "openai", title: "OpenAI", icon: GroupAddIcon, children: [
            { id: "openai", title: "OpenAI", icon: SleddingIcon },
            { id: "chatbot", title: "ChatBot", icon: DirectionsSubwayIcon },
        ]
    },

    {
        id: "llm", title: "LLM", icon: GroupAddIcon, children: [
            { id: "openai", title: "Llama", icon: KitesurfingIcon },
            { id: "chatbot", title: "Gemini", icon: FlightIcon },
        ]
    },

    { id: "userCenter", title: "Setup", icon: HealthAndSafetyIcon },
];

export default sideMenuConfigData;

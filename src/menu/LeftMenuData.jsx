import DataUsageIcon from '@mui/icons-material/DataUsage';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import PasswordIcon from '@mui/icons-material/Password';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

//菜单的测试数据
const sideMenuConfigData = [
    {
        id: "mern", title: "MERN", icon: PersonIcon, children: [
            { id: "react", title: "React", icon: VerifiedUserIcon },
            { id: "express", title: "Express", icon: PasswordIcon },
            { id: "Mongo", title: "Mongo", icon: VpnKeyIcon },
            { id: "mernothers", title: "Others", icon: HealthAndSafetyIcon },
        ]
    },

    {
        id: "python", title: "Python", icon: FeaturedVideoIcon, children: [
            { id: "core", title: "Core", icon: ReplyAllIcon },
            { id: "datastructure", title: "Data Structure", icon: ReplyAllIcon },
            { id: "django", title: "Django", icon: DataUsageIcon },
        ]
    },

    {
        id: "openai", title: "OpenAI", icon: GroupAddIcon, children: [
            { id: "openai", title: "OpenAI", icon: null },
            { id: "chatbot", title: "ChatBot", icon: null },
        ]
    },

    {
        id: "llm", title: "LLM", icon: GroupAddIcon, children: [
            { id: "openai", title: "Llama", icon: null },
            { id: "chatbot", title: "Gemini", icon: null },
        ]
    },

    { id: "userCenter", title: "Setup", icon: HealthAndSafetyIcon }
];

export default sideMenuConfigData;

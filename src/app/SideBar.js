import {AiFillPlusCircle, AiFillSetting} from 'react-icons/ai';
import {IoIosFlash} from 'react-icons/io';
import {RiBookOpenFill} from 'react-icons/ri';
import {BsFillQuestionCircleFill} from 'react-icons/bs';


const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0
        flex flex-col bg-purple-900 text-purple-300">
            <SideBarIcon icon={<IoIosFlash size = "32" />} text="Study Flashcards" />
            <SideBarIcon icon={<RiBookOpenFill size = "32"/>} text="Learn" />
            <SideBarIcon icon={<BsFillQuestionCircleFill size = "32"/>} text="Take Test" />
            <SideBarIcon icon={<AiFillPlusCircle size = "32"/>} text="Add New Set" />
            <SideBarIcon icon={<AiFillSetting size = "32"/>} text = "Settings"/>
        </div>
    )
};

const SideBarIcon = ({icon, text}) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;

import { NavLink } from "react-router-dom";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import um6p_ai from "../../../public/image/myLogo/um6p_ai.png";
export default function SideBaritems() {
  return (
    <>
      <div className=" h-20 w-full bg-secondary  sticky top-0 flex-center " style={{backgroundImage:'logo_ai'}}>
        {/* ________ main title ________ */}
        <img
              style={{width:'270px'}}
              src={um6p_ai}
              className="
            sm:w-[200px] w-1/2 sm:static absolute bottom-1 left-2"
              alt="logo image"
            />
      </div>
      <div className="h-full scroll-side md:overflow-scroll  flex flex-col text-white/70" style={{backgroundColor:'#050629' }}>
        <div>
          {/* ___________________ title (Dashboard)  _________________________ */}
          <NavLink className="aside-item text-xl">
            <SpeedRoundedIcon className="relative  mx-4 text-[#3aaa53] " />
            Dashboard
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* home */}
          <NavLink to="/" className={`aside-subitem group`}>
            <RoofingOutlinedIcon fontSize="small" className="aside-icon"/>
            Home
          </NavLink>
            <NavLink to="/data" className={`aside-subitem group`}>
            <TimelineRoundedIcon fontSize="small" className="aside-icon" />
           
            Data
          </NavLink>
          {/* anlytics */}
          {/* <NavLink className={`aside-subitem group`}>
          <ShoppingCartOutlinedIcon fontSize="small" className="aside-icon" />
            analytics
          </NavLink> */}
          {/* <NavLink className={`aside-subitem group`}>
            <TrendingUpRoundedIcon fontSize="small" className="aside-icon" />
            Sales
          </NavLink> */}

          {/* ___________________ title (Quick menu) _________________________ */}
          <NavLink className="aside-item ">
            <ElectricBoltOutlinedIcon className="relative  mx-4 text-[yellow] " />
            Quick menu  
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* users */}
          <NavLink to="/users" className={`aside-subitem group`}>
            <PeopleAltIcon fontSize="small" className="aside-icon" />
            Police officers
          </NavLink>
          {/* new user */}
          <NavLink to="/newuser" className={`aside-subitem group`}>
            <PersonAddIcon fontSize="small" className="aside-icon" />
            New police officer
          </NavLink>
          {/* products */}

          {/* tranactions */}
          {/* <NavLink className={`aside-subitem group`}>
            <AttachMoneyOutlinedIcon fontSize="small" className="aside-icon" />
            tranactions
          </NavLink> */}
          {/* reports */}
          {/* <NavLink className={`aside-subitem group`}>
            <BarChartOutlinedIcon fontSize="small" className="aside-icon" />
            report
          </NavLink> */}

          {/* ___________________ title (Notifications) _________________________ */}
          <NavLink className="aside-item ">
            <NotificationsActiveOutlinedIcon className="relative  mx-4 text-red/90 " />
            Notifications
          </NavLink>
          {/* _________ sub menu ________ */}
          {/* mail */}
          <NavLink className={`aside-subitem group`}>
            <EmailOutlinedIcon fontSize="small" className="aside-icon" />
            mail
          </NavLink>
          {/* feedbacks */}
          {/* <NavLink className={`aside-subitem group`}>
            <ThumbUpOffAltOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            feedbacks
          </NavLink> */}
          {/* messages */}
          {/* <NavLink className={`aside-subitem group`}>
            <ChatOutlinedIcon fontSize="small" className="aside-icon" />
            messages
          </NavLink> */}

          {/* ___________________ title (staff) _________________________ */}
          {/* <NavLink className="aside-item ">
            <EngineeringOutlinedIcon className="relative  mx-4 text-[orange]/80 " />
            staff
          </NavLink> */}
          {/* _________ sub menu ________ */}
          {/* mail */}
          {/* <NavLink className={`aside-subitem group`}>
            <ManageAccountsOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            manage
          </NavLink> */}
          {/* feedbacks */}
          {/* <NavLink className={`aside-subitem group`}>
            <ThumbUpOffAltOutlinedIcon
              fontSize="small"
              className="aside-icon"
            />
            analytics
          </NavLink> */}
          {/* messages */}
          <NavLink className={`aside-subitem group`}>
            <ErrorOutlineOutlinedIcon fontSize="small" className="aside-icon" />
            report
          </NavLink>
          <div className="h-32"></div>
        </div>
      </div>
    </>
  );
}

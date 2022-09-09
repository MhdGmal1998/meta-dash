import './sidebar.scss'

// Material Icons import 
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
function Sidebar(props) {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' className='link' >
                    <span className="logo">
                        MetaCode
                    </span>
                </Link>


            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title"> MAIN </p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to='/users' className='link' >
                        <li>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>

                    </Link>
                    <Link to='/products' className='link' >
                        <li>
                            <ProductionQuantityLimitsOutlinedIcon className='icon' />
                            <span>Products </span>
                        </li>

                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs </span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LoginOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                    <p className="title">THEME</p>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}>

                </div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullScreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import icon from '../../images/icon.jpg'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'
function Navbar(props) {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='search'>
                    <input placeholder='search' />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className='items'>
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'
                        />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon'
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>

                    <div className="item">
                        <FullScreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>
                            1
                        </span>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlinedIcon className='icon' />
                        <span>
                            2
                        </span>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src={icon} className='profile' />
                    </div>
                    <div className="item">
                        <SettingsOutlinedIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
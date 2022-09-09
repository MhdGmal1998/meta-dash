import React, { useState } from 'react';
import sidebar from './sidebar.scss'
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import Job from '@mui/icons-material/WorkOutlineOutlined'
import Application from '@mui/icons-material/SettingsApplicationsOutlined'
import Team from '@mui/icons-material/GroupOutlined'
import Billing from '@mui/icons-material/NoteAddOutlined'
import Report from '@mui/icons-material/ReportOutlined'



const Item = ({ icon, name, setItemActive, itemActive }) => {

    return (
        <li onClick={() => setItemActive(name)} >
            <div className={name === itemActive ? "item active" : "item"}>
                <div className="icon">
                    {icon}
                </div>
                <div className="name">
                    {name}
                </div>
            </div>
        </li>
    )
}


let Elements = [
    {
        name: "Dashboard",
        icon: (
            <DashboardIcon />
        ),
    },
    {
        name: "Job",
        icon: (
            <Job />
        )
    },
    {
        name: "Applications",
        icon: (
            <Application />
        )
    },
    {
        name: "Team",
        icon: (
            <Team />
        )
    },
    {
        name: "Billing",
        icon: (
            <Billing />
        )
    }, {
        name: "Report",
        icon: (
            <Billing />
        )
    }
]
const Items = () => {
    const [itemActive, setItemActive] = useState("Dashboard")
    return (
        <div className="items">
            <ul>
                {
                    Elements.map((item, index) => {
                        return (
                            <Item {...item} index={index}
                                setItemActive={setItemActive}
                                itemActive={itemActive}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}
const Sidebar = () => {
    return (
        <div className='sidebar2'>
            <div className="sidebartitle">
                <div className="logo">
                    SN
                </div>
                <div className='name'>
                    StudentNaurki
                </div>

            </div>

            <Items />

        </div>
    );
};

export default Sidebar;
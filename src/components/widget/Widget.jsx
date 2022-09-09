import React from 'react';
import './widget.scss'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import ShopingCartOutlinedIcon from '@mui/icons-material/ShoppingCartRounded'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
function Widget(props) {

    let mount = 100;
    let diff = 20;
    let { type } = props
    let data;
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all Users',
                icon: <PersonOutlineOutlined className='icon' style={{
                    color: 'crimson',
                    backgroundColor: 'rgba(255,0,0,0.2)'
                }} />
            }
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShopingCartOutlinedIcon className='icon' style={{
                    color: 'goldenrod',
                    backgroundColor: 'rgba(218,165,32,0.2)'
                }} />
            }
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon'
                    style={{
                        color: 'green',
                        backgroundColor: 'rgba(0,128,0,0.2)'
                    }} />
            }
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See Details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon'
                    style={{
                        color: 'purple',
                        backgroundColor: 'rgba(128,0,128,0.2)'
                    }} />
            }
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {data.isMoney && '$'}
                    {mount}
                    {data.isMoney && 'K'}
                </span>
                <span className="link">
                    {data.link}
                </span>
            </div>
            <div className="right">
                <span className="percentage">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </span>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
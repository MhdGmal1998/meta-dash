import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'
export default () => {

    return (<div className='list'>
        <Sidebar />
        <div className="listContainer">
            <Navbar />
            <Datatable />
        </div>
    </div>)
}
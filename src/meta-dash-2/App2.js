import React from 'react';
import app2 from './app2.scss'
import Sidebar from './component/sidebar/Sidebar'
import Leftbar from './component/leftbar/Leftbar';
import Home from './component/home/Home'
function App2(props) {
    return (
        <div className='app2'>
           <Sidebar/>
           <Home/>
           <Leftbar/>
        </div>
    );
}

export default App2;
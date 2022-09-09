import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
function Featured() {
    return (
        <div className='featured'>
            <div className="top">
                <h1>
                    Total Revenue
                </h1>
                <MoreVertOutlinedIcon fontSize='small' className='icon' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={60} text={'60%'} strokeWidth={5} />
                </div>
                <div className="title">
                    Total Sales made by today
                </div>
                <div className="price">
                    $420
                </div>
                <div className="desc">
                    Previous transactions processing. Last payment may be not include
                </div>
                <div className="summary">
                    <div className="item">
                        <div className="title">
                            Annual Target
                        </div>
                        <div className="val positive">
                            <KeyboardArrowUp fontSize='small' />
                            $120.4K
                        </div>
                    </div>

                    <div className="item">
                        <div className="title">
                            Last Week
                        </div>
                        <div className="val negative">
                            <KeyboardArrowDown fontSize='small' />
                            $0.4K
                        </div>
                    </div>

                    <div className="item">
                        <div className="title">
                            Last Month
                        </div>
                        <div className="val positive">
                            <KeyboardArrowUp fontSize='small' />
                            $12.4K
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Featured;
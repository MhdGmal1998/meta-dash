import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
export default () => {

    return (<div className='single'>
        <Sidebar />

        <div className="singleContaier">
            <Navbar />

            <div className="top">
                <div className="left">

                    <div className="titleContainer">
                        <h1 className='title'> Information</h1>
                        <span className='editButton'>Edit</span>
                    </div>

                    <div className="item">
                        <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/120376/s960_Universities_Minister_Michelle_Donelan.jpeg"
                            alt=""
                            className="itemImage" />
                        <div className="info">
                            <h1 className='name'>Isabella Sofia</h1>
                            <p className='email'>Email : Isabella@gmil.com</p>
                            <p className="phone">Phone : +123 456 789</p>
                            <p className="address">Address : Elto St. 234 Gardern Yd NewYour</p>
                            <p className="country">Country :USA</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <Chart title="User spending (Last 6 Months) " aspect={3 / 1} />
                </div>
            </div>

            <div className="bottom">
                <h1 className="title">Last Transactions </h1>
                <List />
            </div>
        </div>
    </div>)
}
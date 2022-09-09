import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'


import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
export default ({ inputs, title }) => {

    const[file,setFile]=useState("")
    return (<div className='new'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="top">
                <h1 className="title">{title}</h1>
            </div>

            <div className="bottom">
                <div className="left">
                    <img src={file ? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="avator" />
                </div>

                <div className="right">
                    <form autocomplete="off">
                        <div className="formInput ">
                            <label for="file" className='fileContainer'>
                                Image: <DriveFolderUploadOutlinedIcon className='icon' />
                            </label>
                            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{ display: 'none' }} />
                        </div>
                        {
                            inputs.map((item) => (
                                <div className="formInput" key={item.id}>
                                    <label>
                                        {item.label}
                                    </label>
                                    <input type={item.type} placeholder={item.placeholder} autoComplete='' />
                                </div>
                            ))
                        }
                        <div className="formSubmit">
                            <button> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}
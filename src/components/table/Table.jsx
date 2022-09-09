import React, { useEffect, useState } from 'react';
import './table.scss'
import axios from 'axios';
import { BarLoader, AudioLoader } from '../loader/Loader';

// MUI component
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let data = [
    {
        id: 123123,
        product: 'product 1',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg',
        customer: 'jhon smith',
        date: '1 march',
        amount: 18,
        method: 'online',
        status: 'Pending'
    },
    {
        id: 1433223,
        product: 'product 2',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',
        customer: 'georg sam',
        date: '12 september',
        amount: 15,
        method: 'online',
        status: 'Approved '
    },
    {
        id: 2314321,
        product: 'product 3',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg',
        customer: 'barak lavrof',
        date: '4 april',
        amount: 10,
        method: 'online',
        status: 'Pending'
    },
    {
        id: 2423234,
        product: 'product 4',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg',
        customer: 'Anas samwell',
        date: '14 october',
        amount: 20,
        method: 'online',
        status: 'Approved'
    },
    {
        id: 1232142,
        product: 'product 5',
        img: 'https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UL480_QL65_.jpg',
        customer: 'jhon smith',
        date: '1 march',
        amount: 200,
        method: 'online',
        status: 'Pending'
    },
    {
        id: 6544345,
        product: 'product 6',
        img: 'https://m.media-amazon.com/images/I/71q-KKcG4aL._AC_UL480_QL65_.jpg',
        customer: 'georg sam',
        date: '12 november',
        amount: 100,
        method: 'online',
        status: 'Approved'
    }
]
function List(props) {
    // const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        axios.get('http://localhost:8080/imageByIdCategory', (error, data) => {
            // setData(data)
            // setLoading(false)
        })
    }, [])
    return (
        loading ? <BarLoader /> : (
            <TableContainer component={Paper} className='table'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>Tracking ID</TableCell>
                            <TableCell className='tableCell'>Image </TableCell>
                            <TableCell className='tableCell'>Username</TableCell>
                            <TableCell className='tableCell'>Date</TableCell>
                            {/* <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment</TableCell> */}
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className='tableCell' component="th" scope="row">{row.id}</TableCell>
                                <TableCell className='tableCell'>
                                    <div className="cellWrapper">
                                        <img src={row.img} className='image' />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className='tableCell'>{row.customer}</TableCell>
                                <TableCell className='tableCell'>{row.date}</TableCell>
                                {/* <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell> */}
                                <TableCell className='tableCell'>
                                    <span className={`status ${row.status}`}>
                                        {row.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default List;
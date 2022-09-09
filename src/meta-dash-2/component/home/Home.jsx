import React from 'react';
import './home.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import SearchIcon from '@mui/icons-material/SearchOutlined'
const HomeTitle = () => {
  return (
    <div className="homeTitle">
      <div className="dashboard">
        Dashborad
      </div>

      <div className="info">
        <div className="time">
          4 December 2019, Wednesday
        </div>
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}


const HomeCard = ({ name, value, color, text, trailColor }) => {

  return (
    <div className="homeCard">
      <div className="left">
        <div className="title">
          {name}
        </div>
        <div className="value">
          {value}
        </div>
      </div>
      <div className="right">
        <CircularProgressbar value={text > 0 ? text * 4 : -text * 4} text={(text > 0 ? "+" + text : text) + "%"} strokeWidth={5} className='circle'
          styles={buildStyles(
            {
              textColor: color,
              pathColor: color,
              trailColor: trailColor
            }
          )}

        />
      </div>
    </div>
  )
}

let ElememtCards = [{
  name: "APPLICATION",
  value: "12.2 K",
  color: "#df6fb5",
  trailColor: "rgba(255,125,203,0.2)",
  text: 5
},
{
  name: "SHORTLISTED",
  value: "11.1 K",
  color: "#00cfde",
  trailColor: "rgba(0,207,222,0.2)",
  text: 14
},
{
  name: "ON-HOLD",
  value: "6.8 K",
  color: "#fdac42",
  trailColor: "rgba(253,172,66,0.2)",
  text: -4
}
]
const HomeCards = () => {
  return (
    <div className="homeCards">
      {
        ElememtCards.map((Item) => (
          <HomeCard {...Item} />
        ))
      }
    </div>
  )
}



const Chart=()=>{

}
const Bottom =()=>{

}
const Home = () => {
  return (
    <div className='home'>
      <HomeTitle />
      <HomeCards />
    </div>
  );
};

export default Home;
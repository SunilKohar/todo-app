import React from 'react'
import '../components/Header.css'

const Header = () => {

  const date = new Date();
  const dateNumber = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const days =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months=['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='header'>
      <div className="header-Container">
        <div className="header-Day">
          <div className="header-day_day">
            {days[day]}
          </div>
          <div className="header-month">
            {dateNumber +' '+months[month]+' '+year}
          </div>
        </div>
        {/* <div className='header-logo'>All Tasks</div> */}
      </div>
    </div>
  )
}

export default Header;
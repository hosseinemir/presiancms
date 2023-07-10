import React from 'react'
import './Header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Header() {
  return (
    <div className='header-main'>
      <div className="header-right">
         <div className='header-img'>
          <img src="./img/Header/21.png" alt="admin photo" />
         </div>
         <div className='header-name'>
          <h2>امیرحسین کریمی</h2>
          <h3>برنامه نویس فرانت</h3>
         </div>
      </div>
      <div className='header-left'>
        <div className="search-box">
        <input type="search" placeholder='جست و جو کنید' />
        <button>جست و جو</button>
        </div>
        <button>
          <NotificationsIcon/>
        </button>
        <button>
          <LightModeIcon/>
        </button>

      </div>
    </div>
  )
}

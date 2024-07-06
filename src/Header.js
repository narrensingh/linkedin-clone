import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Headeroption from './Headeroption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
            <div className="header__search">
                <SearchIcon/>
                <input placeholder='search'/>
            </div>   
        </div>
        <div className="header__right">
            <Headeroption Icon={HomeIcon} title='Home'/>
            <Headeroption Icon={SupervisorAccountIcon} title='My Network'/>
            <Headeroption Icon={BusinessCenterIcon} title='Jobs'/>
            <Headeroption Icon={ChatIcon} title='Messaging'/>
            <Headeroption Icon={NotificationsIcon} title='Notifications'/>
            <Headeroption title="me" onclick={logoutOfApp} avatar={true}/>
        </div>
    </div>
  )
}

export default Header
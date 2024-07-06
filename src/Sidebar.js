import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)
    const recentItems = (topic) => {
        return (<div className="sidebar__recentItems">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>)
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg" alt="background_image" className='sidebar__image'/>
            <Avatar className='sidebar__avatar' src={user.photoUrl}>{user.displayName[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2000</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>1500</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItems('web developement')}
            {recentItems('react js')}
            {recentItems('react native')}
            {recentItems('app developement')}
        </div>
    </div>
  )
}

export default Sidebar
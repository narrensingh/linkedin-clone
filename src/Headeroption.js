import React from 'react'
import './Headeroption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Headeroption({avatar,Icon,title,onclick}) {
    const user = useSelector(selectUser)
  return (
    <div className='headerOption' onClick={onclick}>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <Avatar className='headerOption__icon' src={user.photoUrl}>{user.displayName[0]}</Avatar>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default Headeroption
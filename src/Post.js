import React,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import RecommendIcon from '@mui/icons-material/Recommend';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name , discription, message, photoURL},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>   
        <div className="post__buttons">
            <InputOption Icon={RecommendIcon} title="like" color="gray"/>
            <InputOption Icon={ChatIcon} title="comment" color="gray"/>
            <InputOption Icon={ShareIcon} title="share" color="gray"/>
            <InputOption Icon={SendIcon} title="send" color="gray"/>
        </div>
    </div>
  )
})

export default Post
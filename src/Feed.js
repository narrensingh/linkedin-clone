import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser)
    const [input ,setInput] = useState('')
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => {
            return {
                id:doc.id,
                data:doc.data(),
            }
        }))
    })
  },[])
  const sendPost = (e) => {
    db.collection('posts').add({
        name:user.displayName,
        des:user.email,
        message : input,
        photoURL:user.photoUrl || "",
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("")
  }
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className='feed__input'>
                <CreateIcon/>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendPost} type="submit">send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='photo' color='#70B5F9'/>
                <InputOption Icon={SubscriptionsIcon} title='video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='event' color='#C0CBCD'/>
                <InputOption Icon={ViewDayIcon} title='write article' color='#7FCC15E'/>
            </div> 
        </div>
        <FlipMove>
        {
           
           posts.map(({id,data:{name,des,message,photoURL}}) => {
               return (
                   <Post key={id} name={name} discription={des} message={message} photoURL={photoURL} />
               )
           })
       }
        </FlipMove>
   
    </div>
  )
}

export default Feed
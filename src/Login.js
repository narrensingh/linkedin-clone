import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {
    const [name ,setName] = useState('')
    const [password ,setPassword] = useState('')
    const [email ,setEmail] = useState('')
    const[profile,setProfile] = useState('')
    const dispatch = useDispatch()
    const register = () => {
        if (name === ''){
            alert('Full Name Is A Required Field')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then(userAuth => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profile,
            }).then(() => dispatch(login({
                email: userAuth.user.email,
                uid : userAuth.user.uid,
                displayName:name,
                photoUrl:profile
            })))
        }).catch(err => alert(err.message))
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photoURL
            }))
        })
    }
  return (
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" className="login__image"/>
        <form className='login__form'>
            <input placeholder="Full Name *(required if registering)" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="Profile pic URl (optional)" type="text" value={profile} onChange={(e) => setProfile(e.target.value)}/>
            <input placeholder="e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="passoword" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={loginToApp} type="submit">Sign In</button>
        </form>
        <p className='login__register'>Not a member?
            <span onClick={register}> Register now</span>
        </p>
    </div>
  )
}

export default Login
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const loginRef = useRef();
  const passwordRef = useRef();

  const navigation = useNavigate()

  function Validation() {
    if (loginRef.current.value.length < 3) {
      alert("login yaoqsiz")
      loginRef.current.focus(
      loginRef.current.style.outlineColor = "red"
      )
    }
    return true
  }



  function login_btn(e) {
    e.preventDefault()
    navigation('/home')
    const isValid = Validation()
    if (!isValid) {
      return
    }

    const user = {
      "login": loginRef.current.value,
      "password": passwordRef.current.value
    }
    
    fetch('https://auth-rg69.onrender.com/api/auth/signin',{
      method : "POST",
      headers : {
        'Contend-type':'application/json()'
      },
      body : JSON.stringify(user)
    })
    .then(function (res) {
      if (res.status == 200) {
        return res.json()
      }
    })
    .then(function (data) {
      if (data.message == "") {
        navigation('/home')
      }
      if (data.message == '' || data.message == '') {
        console.log(data.message);
      }
    })
    .catch(err => (console.log(err)))

  }
  return (
    <div className='flex flex-col my-24 mx-auto w-[500px] bg-yellow-200 py-5 rounded-md px-5 gap-3'>
       <h1 className='text-4xl mb-4 text-center text-blue-500'>Login page</h1>
      <input  className='py-2 px-2 rounded-md text-xl' ref={loginRef} type="text" placeholder='Enter login...'/>
      <input className='py-2 px-2 rounded-md text-xl' ref={passwordRef} type="password" placeholder='Enter password..' />
      <button className='py-2 px-2 bg-blue-600 rounded-md text-2xl text-gray-600' onClick={login_btn}>Button</button>
    </div>
  )
}

export default Login
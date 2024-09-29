import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const reppasswordRef = useRef()

    const navigate = useNavigate()


    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function Validate() {
      if (usernameRef.current.value.length <3) {
        alert("username yaroqsiz")
        usernameRef.current.focus()
        usernameRef.current.style.outlineColor = 'red'
      }
      if (!validateEmail(emailRef.current.value)) {
        alert('email yaroqsiz');
        emailRef.current.focus()
        emailRef.current.style.outlineColor = 'red'
      }

      if (passwordRef.current.value != reppasswordRef.current.value) {
        alert('parolda muammo bor')
      }
      return true
    }


    function handleclick(e) {
        e.preventDefault()

        const isValidate = Validate()
        if (!isValidate) {
          return
        }


        const user ={
          "username" : usernameRef.current.value,
          "email" : emailRef.current.value,
          "password" : passwordRef.current.value
        }
        
        fetch('https://auth-rg69.onrender.com/api/auth/signup',{
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })

        .then(function (res) {
          if (res.status == 200) {
            return res.json()
          }
        })
        .then(function (data) {
          if (data.message == "User registered successfully!") {
            navigate('/Login')
          }
          if (data.message == "Failed! Username is already in use!" || data.message == "Faild! Email is already in use!") {
            alert(data.message)
          } 
        })
        .catch(function (err) {
          console.log(err);
        })

    }
  return (
    <div className='flex flex-col my-24 mx-auto w-[500px] bg-slate-400 py-5 rounded-md px-5 gap-3'>
        <h1 className='text-4xl mb-4 text-center text-blue-500'>Register page</h1>
        <input ref={usernameRef} className='py-2 px-2 rounded-md text-xl' type="text" placeholder='Enter username...' />
        <input ref={emailRef} className='py-2 px-2 rounded-md text-xl' type="email" placeholder='Enter email...' />
        <input ref={passwordRef} className='py-2 px-2 rounded-md text-xl' type="password" placeholder='Enter password...' />
        <input ref={reppasswordRef} className='py-2 px-2 rounded-md text-xl' type="password" placeholder='Enter password reply...' />

        <button  onClick={handleclick} className='py-2 px-2 bg-green-600 rounded-md text-2xl text-gray-600'>Save</button>
    </div>
  )
}

export default Register
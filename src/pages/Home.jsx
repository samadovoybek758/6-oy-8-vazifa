import React, { useRef } from 'react'
import Card from '../components/Card';

function Home() {
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  function Validation() {
    if (nameRef.current.value.length < 3) {
      alert('berilgan name yaroqsiz')
      nameRef.current.focus()
      nameRef.current.style.outlineColor = 'red'
    }
    if (descRef.current.value.length < 3) {
      alert('berilgan description yaroqsiz')
      descRef.current.focus()
      descRef.current.style.outlineColor = 'red'
    }
    return true
  }



  function add_btn(e) {
    e.preventDefault();

    const isValid = Validation()
    if (!isValid) {
      return
    }

    const data = {
      "name" : nameRef.current.value,
      "price" : priceRef.current.value,
      "description" : descRef.current.value
    }
    
    fetch('https://auth-rg69.onrender.com/api/products ',{
      method : "POST",
      headers :{
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(function (res) {
      if (res.status == 200) {
        return res.json()
      }
    })
    .then(function (data) {
      console.log(data);
    })
    
  }
  return (
    <>
      <div className='flex flex-col py-7 px-6 gap-3 my-16 container rounded-md max-w-[600px] mx-auto bg-green-300  '>
        <input className='px-3 py-2 rounded-md text-gray-800 ' ref={nameRef} type="text" placeholder='Enter name...' />
        <input className='px-3 py-2 rounded-md text-gray-800 ' ref={priceRef} type="number" placeholder='Enter price...'/>
        <input className='px-3 py-2 rounded-md text-gray-800 ' ref={descRef} type="text" placeholder='Enter something...' />
        <button className='bg-blue-400 py-2 px-3 rounded-md text-yellow-300' onClick={add_btn}>ADD CARD</button>
     </div>
     <div className='container justify-center  mx-auto my-20 flex grid-flow-row flex-row gap-7 max-w-[1200px]'>
         <Card/>
     </div>
    </>
  )
}

export default Home
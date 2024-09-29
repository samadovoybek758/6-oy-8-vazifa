import React, { useEffect, useState } from 'react'

function Card() {
    const [data,setdata] = useState([])

    useEffect(function () {
        fetch('https://auth-rg69.onrender.com/api/products/all')

        .then(function (res) {
            if (res.status==200) {
                return res.json()
            }
        })
        .then(function (data) {
            console.log(data);
            setdata(data)
        })
        .catch(function (err) {
            console.log(err);
        })
    },[])

   
  return (
    <div  className='container justify-center gap-4 mx-auto flex flex-row flex-wrap  max-w-[1200px]'>
        {
            data.length > 0 && data.map(function (product) {
              return <div>
                 <div key={product.id} className='flex flex-col p-3 mx-auto w-[300px]  border border-solid rounded-md  border-gray-600'>
                    <h1>Name :  {product.name}</h1>
                    <h2>Price : ${product.price}</h2>
                    <h2>description : {product.description}</h2>
                    </div>
              </div>
              
            
            }
            )
        }
    </div>
  )
}

export default Card
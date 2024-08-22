"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    const [form, setform] = useState({Fname:"", Lname:"",Email:"",Contact:"",Describe:""})        
    const handleform=(e) => {
      setform({...form,[e.target.name]:e.target.value})
    }
    const handlepost=async () => {
        let res = await fetch("http://localhost:3000/senddata", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
          })
          let response = await res.json();
      console.log(response)
      if(response.error=="ValidationError"){
        document.querySelector(".Inputs").innerHTML="*All fields are required"
      }
      if(response.status){router.push('/')}
    }
    
    
    return (
        <div>
            <Navbar />
            <div className="container h-[70vh]  flex  justify-center items-center ">



                <div className='bg-gray-200 w-[50vw] pt-12 pb-4 border-2 rounded-lg text-center'>
                    <div className='text-2xl text-gray-700 mb-4'>Fill the form to contact Alumni cell</div>
                    <div className='Inputs text-red-500 text-lg'></div>
                    <div className='justify-evenly flex flex-wrap'>
                    <div className='m-2 h-fit '><input type="text" name='Fname' onChange={handleform} value={form.Fname} className=' border-2 border-gray-300  h-12  p-2 rounded-md text-lg' placeholder='First Name' /></div>
                    <div className='m-2 h-fit '><input type="text" name='Lname' onChange={handleform} value={form.Lname} className=' border-2 border-gray-300  h-12  p-2 rounded-md text-lg' placeholder='Last Name' /></div>
                    <div className='m-2 h-fit '><input type="text" name='Email' onChange={handleform} value={form.Email} className=' border-2 border-gray-300  h-12  p-2 rounded-md text-lg' placeholder='Email' /></div>
                    <div className='m-2 h-fit '><input type="text" name='Contact' onChange={handleform} value={form.Contact} className=' border-2 border-gray-300  h-12  p-2 rounded-md text-lg' placeholder='Contact' /></div>
                    <div className='m-2 h-fit '><input type="text" name='Describe' onChange={handleform} value={form.Describe} className=' border-2 border-gray-300  h-12  p-2 rounded-md text-lg' placeholder='Describe' /></div>
                    
                   
                    </div>
                    <div className='text-center pt-4'><button onClick={handlepost} className='border-2 border-gray-300 p-2  py-3 w-60 text-white text-lg font-semibold bg-orange-500 rounded-lg mx-2'>Send</button></div>

                </div>


            </div>
        </div>
    )
}

export default page

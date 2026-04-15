"use client"

import { Email, FacebookOutlined, Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input'
import React, { useState } from 'react'

export default function Log() {
     const [value, setValue] = useState('');
  return (
    <div className='h-full w-full flex justify-center items-center bg-white py-10   '>
       <div className='max-h max-w flex justify-center items-centre  flex-col py-4 px-16'>
        <p className='text-center text-xl md:text-2xl text-black font-bold'>Login with OTP</p>
        <p className='text-black text-center '>Please enter your 10 digit mobile number</p>
        <div className='w-full mt-4 '>
      <MuiTelInput
        value={value}
        onChange={setValue}
        defaultCountry="IN"
        sx={{width:{md:"400px",xs:"280px"}}}
      />
    </div>
    <button className=' mt-4 py-3 border border-violet-700 bg-violet-700 w-40 mx-auto rounded-lg '>Request OTP</button>
     <p className='text-black text-center text-sm mt-2'>A 4 digit OTP will be sent to your phone number</p>
       <div className="flex items-center my-3">
  <hr className="flex-grow border-t border-[#423c39]" />
  <span className="mx-4 text-black whitespace-nowrap ">Or Sign-in with</span>
  <hr className="flex-grow border-t border-[#423c39]" />
</div>
<div className='flex justify-center items-center  '>
    <button className='text-black border py-3 px-9 rounded-lg'><Email sx={{color:"black"}}/> Email</button>
</div>
    <div className="flex items-center my-3">
  <hr className="flex-grow border-t border-[#423c39]" />
  <span className="mx-4 text-black whitespace-nowrap ">Or continue with</span>
  <hr className="flex-grow border-t border-[#423c39]" />
</div>
<div className='flex justify-center items-center flex-row gap-2'>
    <div className='flex justify-between items-center bg-blue-400 border border-blue-400 rounded-lg py-2 px-4 gap-2 cursor-pointer ' >
    <FacebookOutlined className='border-r border-r-white'/>
     <button >Facebook</button>
    </div>
 <div className='flex justify-between items-center bg-blue-400 border border-blue-400 rounded-lg py-2 px-6 gap-2 cursor-pointer ' >
    <Google className='border-r border-r-white'/>
     <button >Google</button>
    </div>
    </div>
       </div>
    </div>
  ) 
}

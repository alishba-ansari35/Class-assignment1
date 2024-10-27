import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>

     <ul className='flex bg-orange-900 w-100% justify-center h-16 '>
      <li className="li" ><Link href="/">Home</Link></li>
      <li className="li" ><Link href="/about">About</Link></li>
      <li className="li"><Link href="/contact">Contact</Link></li>
      <li className="li"><Link href="/service"> Service</Link></li>
      </ul>

      <div className="bg-orange-200  pt-5 pb-24 h-500 ">
      <p  className='flex text-orange-900 text-4xl justify-center pl-10'>INTRODUCTION OF WEB DEVELOPMENT </p>
      <p  className='flex text-orange-900 text-4xl justify-start pt-10 pl-10'>Q1: What is Web Development? </p>
      <p  className='flex text-orange-800 text-2xl justify-start pl-20 pt-2'>
       Ans: Web development is the process of developing websites
         or web applications that run on the Internet (or an Intranet).
          It can take various forms, including database management,
        web programming, and web design, among others. </p>

        <p  className='flex text-orange-900 text-4xl justify-start pl-10 pt-5'>Q2: How many types of Web Developer? </p>
        <p  className='flex text-orange-800 text-2xl justify-start pl-10 pt-2'>
       Ans: There are three Types of web development.<br></br>
         1: FRONT-END WEB DEVELOPER <br></br>
         2: BACK-END WEB DEVELOPER <br></br>
         3: FULL STACK WEB DEVELOPER </p>
      </div>


      <div className="flex bg-orange-900 w-100% justify-center h-16   ">
      <p className="li"  >2024 @ copyright all right reserved </p>
      
      </div>


      
    </div>
  )
}

export default Homepage

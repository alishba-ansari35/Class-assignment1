import Link from 'next/link'
import React from 'react'
import styles from './about.module.css'

const Aboutpage = () => {
  return (
    <div>
      
      <ul className='flex bg-orange-900 w-100% justify-center h-16 '>
       <li className="li" ><Link href="/">Home</Link></li>
      <li className="li" ><Link href="/about">About</Link></li>
      <li className="li"><Link href="/contact">Contact</Link></li>
      <li className="li"><Link href="/service"> Service</Link></li>
    </ul>
   
    <div className={styles.container}>
      <h1 className={styles.heading}>ABOUT US</h1>
      <h2 className={styles.heading1}>Hello,</h2>
      <h2 className={styles.heading2}>I AM WEB DEVELOPER</h2>
      <p className={styles.heading3}>My Skills is Html , Css , Javascript, Typescript , Node.js, Next.js <br></br> 
      React.js , Java , C++ , Ruby, PHP , Phython :</p>
      
      </div>

      <div className="flex bg-orange-900 w-100% justify-center h-16   ">
      <p className="li"  >2024 @ copyright all right reserved </p>
      </div>




    </div>
  )
}

export default Aboutpage

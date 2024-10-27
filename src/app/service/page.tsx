import Link from 'next/link'
import React from 'react'
import styles from './service.module.css'

const Servicepage = () => {
  return (
    <div>
       <ul className='flex bg-orange-900 w-100% justify-center h-16 '>
       <li className="li" ><Link href="/">Home</Link></li>
      <li className="li" ><Link href="/about">About</Link></li>
      <li className="li"><Link href="/contact">Contact</Link></li>
      <li className="li"><Link href="/service"> Service</Link></li>
    </ul>
     
    <div className={styles.container}>
      <h1 className={styles.heading}>OUR SERVICES </h1>
    <div className={styles.box}>
      <Link href="/service/graphic-design">Graphic-Designing</Link> 
     <p className={styles.heading1}>Design is the art of planning and is the art of making things possible</p>
    </div>

      </div>

      <div className='flex bg-orange-900 w-100% justify-center h-16'>
      <p className='li'  >2024 @ copyright all right reserved </p>
      </div>

    </div>
  )
}

export default Servicepage

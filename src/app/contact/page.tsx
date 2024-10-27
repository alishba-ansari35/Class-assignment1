import Link from 'next/link'
import React from 'react'
import styles from './contact.module.css'

const Contactpage = () => {
  return (
    <div>
      
      <ul className='flex bg-orange-900 w-100% justify-center h-16 '>
       <li className="li" ><Link href="/">Home</Link></li>
      <li className="li" ><Link href="/about">About</Link></li>
      <li className="li"><Link href="/contact">Contact</Link></li>
      <li className="li"><Link href="/service"> Service</Link></li>
      </ul>
      <div className={styles.container}>
      <div className={styles.box1}>
      <h1 className={styles.heading}>CONTACT US</h1>
     <form action="">
     <div>
      <label htmlFor="name" className={styles.label}>First Name:</label>
      <input  type="text" id="name" name="name" placeholder='Enter your name'  required className={styles.input} />
     </div>

      <div>
       <label htmlFor="name"  className={styles.label}>Last Name:</label>
     <input type="email" id="email" name="email" placeholder='Enter your email' required className={styles.input}/>
      </div>
               
       <div>
      <label htmlFor="name"  className={styles.label}>Email Address:</label>
       <input type="email" id="email" name="email" placeholder='Enter your email' required className={styles.input}/>
       </div>
                  
        <button type="submit" className={styles.button}>Send Message</button>
     </form>
     </div>
      </div>

      <div className="flex bg-orange-900 w-100% justify-center h-16   ">
      <p className="li"  >2024 @ copyright all right reserved </p>
      </div>

    </div>
  )
}

export default Contactpage

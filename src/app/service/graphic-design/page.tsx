import Link from 'next/link'
import React from 'react'
import styles from './graphic-design.module.css'

const Graphicpage = () => {
  return (
    <div>

      <ul className='flex bg-orange-900 w-100% justify-center h-16 '>
       <li className="li" ><Link href="/">Home</Link></li>
      <li className="li" ><Link href="/about">About</Link></li>
      <li className="li"><Link href="/contact">Contact</Link></li>
      <li className="li"><Link href="/service"> Service</Link></li>
    </ul>
          
    <div className={styles.container}>
      <h1 className={styles.heading}>Q: What is graphic designing ?</h1>
      <p className={styles.heading3}>Ans: Graphic design is a craft where professionals create 
        visual content to communicate messages. By applying visual hierarchy and page layout
         techniques, designers use typography and pictures to meet users’ specific needs and 
         focus on the logic of displaying elements in interactive designs to optimize the user
          experience. In addition to possessing a degree in graphic design or a 
            related field, there are excellent online courses available that can provide 
             essential visual skills you need.</p>

             <h1 className={styles.heading}>Q: How to become a graphic designer?</h1>
      <p className={styles.heading3}>Ans: In addition to possessing a degree in graphic design 
        or a related field, there are excellent online courses available that can provide you
         with all the essential visual skills you need. Platforms like Skillshare, Udemy, and
          Coursera offer a variety of courses focused on developing practical skills and building portfolios. 
          These flexible and affordable courses provide a fantastic opportunity to learn graphic design 
          and grow your skills.</p>

 

          

          

      </div>

    <div className="flex bg-orange-900 w-100% justify-center h-16   ">
      <p className="li"  >2024 @ copyright all right reserved </p>
      </div>

    </div>
  )
}

export default Graphicpage

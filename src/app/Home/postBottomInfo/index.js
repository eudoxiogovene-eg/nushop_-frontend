


import styles from './style.module.css'
import Image from 'next/image'
import product1 from '../../../../public/productos/image2.jpg'
import PostArea from '../PostArea'
import {FaFacebook} from 'react-icons/fa'
import {HiHeart} from 'react-icons/hi'

export default function PostInfo(){
    return(
       <div className={styles.container}>
         <div className={styles.product_info}>
            <h1>calcas originais</h1>
            <span>300 mts</span>
         </div>

         <div className={styles.product_interaction}>
           <span>view all products</span>
           <span> 3450 likes</span>
         </div>

         <div className={styles.product__like__and__coment}>
            <div className={styles.user__and__add__coment}>
               <div className={styles.user__profile}>
                  <Image src={product1} alt="user profile" />
               </div>
               <div className={styles.coment__area}>
                  <input type="text" placeholder="add coment..." />
               </div>
            </div>
            <div className={styles.like__area}>
               <HiHeart size={30} color='red' />
            </div>
         </div>
       </div>
    )
}
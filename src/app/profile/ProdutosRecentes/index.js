
import styles from './style.module.css'
import Image from 'next/image'

import search from '../../../../public/icons/outline_search_black_24dp.png'




import product1 from '../../../../public/productos/image2.jpg'
import product2 from '../../../../public/productos/image1.jpg'
import product3 from '../../../../public/productos/image6.jpg'
import product4 from '../../../../public/productos/image7.jpg'
import product5 from '../../../../public/productos/image8.jpg'



export default function ProductosRecentes(){
    return(
        <div className={styles.container}>
           <div className={styles.destaque__header}>
             <span className={styles.destaque} >productos recentes</span>
           </div>

           <div className={styles.slider__destaque}>
           <div className={styles.content}>
                <div className={styles.container__product}>
                
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                        <Image src={product5} alt="product recent" />
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__name}>all star</span>
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__price}>300mts</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                        <Image src={product2} alt="product recent" />
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__name}>all star</span>
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__price}>300mts</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                        <Image src={product3} alt="product recent" />
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__name}>all star</span>
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__price}>300mts</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                        <Image src={product2} alt="product recent" />
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__name}>all star</span>
                        </div>
                        <div className={styles.category__info}>
                            <span className={styles.category__price}>300mts</span>
                        </div>
                    </div>
                  
                
                
                </div>


        </div>
           </div>
        </div>
    )
}
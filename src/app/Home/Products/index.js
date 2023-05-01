
import Image from 'next/image'
import styles from './style.module.css'
import product1 from '../../../../public/productos/image6.jpg'
import product2 from '../../../../public/productos/image2.jpg'





export default function Products() {
    return (
     <div className={styles.container}>
         <div className={styles.content}>
                <div className={styles.container__product}>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                    <div className={styles.product__area}>
                        <div className={styles.image__content}>
                            <Image src={product1} alt="product" />
                        </div>
                        <div className={styles.user__info}>
                            <Image src={product2} className={styles.user__img} alt="user profile"/>
                            <span className={styles.user__name}>eudoxio govene</span>
                        </div>
                    </div>
                </div>


        </div>

     </div>
    
    )
  }
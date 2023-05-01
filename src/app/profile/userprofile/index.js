
import styles from './style.module.css'
import Image from 'next/image'





import product1 from '../../../../public/productos/image2.jpg'
import product2 from '../../../../public/productos/image1.jpg'
import product3 from '../../../../public/productos/image6.jpg'
import product4 from '../../../../public/productos/image7.jpg'
import product5 from '../../../../public/productos/image8.jpg'



export default function Userprofile(){
    return(
        <div className={styles.container}>
            <div className={styles.header__area}>
                <div className={styles.campa__image}>
                    <Image src={product2} alt='campa da loja' />
                </div>
                <div className={styles.profile__image}>
                        <Image src={product3} alt='campa da loja' />
                </div>
                <div className={styles.user__desc}>
                    <div className={styles.profile__info}>
                        <h1>eudoxio govene</h1>
                    </div>
                    <div className={styles.description}>
                        <p>encontre os melhores productos e os melhores precos  do mercado </p>
                    </div>
                </div>
            
                <div className={styles.action__buttons}>
                    <span className={styles.message}>message</span>
                    <span className={styles.button__follow}>follow</span>
                </div>
                <div className={styles.user__info__content}>
                    <div className={styles.outher__info} style={{borderLeft:'none'}} >
                        <span className={styles.number}  >222</span>
                        <span className={styles.user__info__detail}>post</span>
                    </div>
                    <div className={styles.outher__info}>
                        <span className={styles.number}>222</span>
                        <span className={styles.user__info__detail}>followers</span>
                    </div>
                    <div className={styles.outher__info}>
                        <span className={styles.number}>1.3k</span>
                        <span className={styles.user__info__detail}>following</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



import styles from './style.module.css'
import Image from 'next/image'
import product1 from '../../../../public/productos/image2.jpg'
import PostArea from '../PostArea'
import PostInfo from '../postBottomInfo'

export default function Post(){
    return(
        <div className={styles.container__principal}>
            <div className={styles.container} >
                <div className={styles.container__left__info}>
                    <div className={styles.user__image}>
                        <Image src={product1} alt="user image" />
                    </div>
                    <div className={styles.post__info}>
                        <span className={styles.username}>
                            eudoxio govene
                        </span>
                        <span className={styles.post__time__info}>
                            postado as 09:50
                        </span>
                    </div>
                </div>
                
                <div className={styles.action__follow}>
                    <span >seguir</span>
                </div>
            </div>
            <div className={styles.post__area} >
                <PostArea />
            </div>
            <div className={styles.post__info}>
                <PostInfo />
            </div>
        </div>
    )
}
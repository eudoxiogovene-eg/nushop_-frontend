
import styles from './style.module.css'
import Image from 'next/image'

import search from '../../../../public/icons/outline_search_black_24dp.png'




import product1 from '../../../../public/productos/image2.jpg'
import product2 from '../../../../public/productos/image1.jpg'
import product3 from '../../../../public/productos/image6.jpg'
import product4 from '../../../../public/productos/image7.jpg'
import product5 from '../../../../public/productos/image8.jpg'

//import Products from '../../Home/Products'

export default function Category(){
    return(
        <div className={styles.container__geral}>
            <div className={styles.title}>
                <h3>categorias</h3>
            </div>
        
            <div className={styles.category}>
                <div className={styles.container}>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>all products</span>
                        </div>
                    </div>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>eudoxio</span>
                        </div>
                    </div>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>eudoxio</span>
                        </div>
                    </div>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>eudoxio</span>
                        </div>
                    </div>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>eudoxio</span>
                        </div>
                    </div>
                    <div className={styles.category__conatiner}>
                        <div className={styles.category__area}>
                            <div className={styles.category__content}>
                                <Image src={product1}   className={styles.category__img} alt="product stories" />
                            </div>
                        </div>
                        <div className={styles.user__container}>
                            <span>eudoxio</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
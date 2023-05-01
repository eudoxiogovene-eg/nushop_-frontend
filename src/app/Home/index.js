



import styles from './style.module.css'
import Header from '../../../components/Header'
import Stories from './stories'
import Products from './Products'
import Post from './Post'

export default function Feed(){
    return(
        <div className={styles.container}>
            <Header />
             <div className={styles.stroies_area}>
                <div className={styles.stories_title}>
                    <h3>seguindo</h3>
                </div>
                <Stories />
             </div>
             <div className={styles.popular__product}>
                <div className={styles.product__title}>
                    <h3>productos populares</h3>
                </div>
                <Products />
             </div>
             <div className={styles.feed}>
                <div className={styles.feed__title}>
                   <h3>feed</h3>
                </div>
                <Post />
             </div>
        </div>
    )
}
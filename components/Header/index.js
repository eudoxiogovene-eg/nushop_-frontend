
import styles from './style.module.css'
import Image from 'next/image'
import menu from '../../public/icons/outline_verified_black_24dp.png'




export default function Header(){
    return(
        <div className={styles.header}>
            <nav className={styles.nav__bar}>
                <h1>nushop</h1>
                <Image src={menu} className={styles.image__menu} alt="burguer icon" />
            </nav>
        </div>
    )
}
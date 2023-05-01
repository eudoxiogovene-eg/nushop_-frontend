



import styles from './style.module.css'
import {BiSearch} from 'react-icons/bi'

export default function SearchInput(){
    return(
        <div className={styles.container}>
            <input type="search" placeholder="search" />
            <BiSearch />
        </div>
    )
}


import styles from './style.module.css'
import SearchInput from '../../../../components/inputs/searchInput'

export default function SearchButton(){
    return(
        <div className={styles.container}>
            <SearchInput />
        </div>
    )
}


import styles from './style.module.css'


import Category from "./Category"
import Header from "./userprofile"
import Destaque from "./Destaque"
import ProductosRecentes from "./ProdutosRecentes"
import SearchButton from "./searchButton"


export default function Profile() {
    return (
      <div className={styles.container}>
        <Header />
        <Destaque />
        <ProductosRecentes />
        <div className={styles.search__button}>
          <SearchButton />
        </div>
        <Category />
      </div>
    ) 
  }
  
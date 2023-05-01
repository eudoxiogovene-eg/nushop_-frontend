
import styles from './style.module.css'
import Image from 'next/image'






import product1 from '../../../../public/productos/image2.jpg'
import product2 from '../../../../public/productos/image1.jpg'
import product3 from '../../../../public/productos/image6.jpg'
import product4 from '../../../../public/productos/image7.jpg'
import product5 from '../../../../public/productos/image8.jpg'










const products=[
    {nomeProduto:"gilete",quantidadeFoto:2},
    {nomeProduto:"pente",quantidadeFoto:1},
    {nomeProduto:"sabao",quantidadeFoto:4},
    {nomeProduto:"escola",quantidadeFoto:3},
    {nomeProduto:"escola",quantidadeFoto:5},
    {nomeProduto:"gilete",quantidadeFoto:2},
    {nomeProduto:"pente",quantidadeFoto:1},
    {nomeProduto:"sabao",quantidadeFoto:4},
    {nomeProduto:"escola",quantidadeFoto:3},
    {nomeProduto:"escola",quantidadeFoto:5},
]

const product={
    quantidadeFoto:4
}

export default function PostArea(){
  
    
    return( 
        <>
            
          
           <div className={styles.container}>
                <div className={styles.content__image1}  style={{display:product.quantidadeFoto==1?'block':'none'}}>
                        <Image src={product2} alt="product" />
                </div>

                <div className={styles.content__image2} style={{display:product.quantidadeFoto==2?'flex':'none'}}>
                    <div className={styles.image__2__area}>
                        <Image src={product3} alt="product 1" />
                    </div>
                    <div className={styles.image__2__area}>
                        <Image src={product1} alt="product 2" />
                    </div>
                </div>

                <div className={styles.content__image3} style={{display:product.quantidadeFoto==3?'flex':'none'}}>
                    <div className={styles.content__left}>
                        <Image src={product3} alt="product 1" />
                    </div>
                    <div className={styles.content__right}>
                        <div className={styles.content__right__image3}>
                            <Image src={product5} alt="product 2" />
                        </div>
                        <div className={styles.content__right__image3}>
                            <Image src={product2} alt="product 3" />
                        </div>
                    </div>

                </div>


                <div className={styles.content__image4} style={{display:product.quantidadeFoto==4?'flex':'none'}} >
                    <div className={styles.content__left}>
                    <div className={styles.content__image__area}>
                            <Image src={product3} alt="product 1" />
                        </div>
                        <div className={styles.content__image__area}>
                            <Image src={product5} alt="product 2" />
                        </div>
                    </div>
                    <div className={styles.content__right}>
                        <div className={styles.content__image__area}>
                            <Image src={product1} alt="product 3" />
                        </div>
                        <div className={styles.content__image__area}>
                            <Image src={product2} alt="product 4" />
                        </div>
                    </div>

                </div>

                <div className={styles.content__image5} style={{display:product.quantidadeFoto==5?'flex':'none'}}>
                            <div className={styles.content__top__Image__area}>
                                <div className={styles.top__image__area}>
                                    <Image src={product1} alt="product 1" />
                                </div>
                                <div className={styles.top__image__area}>
                                    <Image src={product3} alt="product 2" />
                                </div>
                            </div>
                                <div className={styles.content__bottom__Image__area}>
                                        <div className={styles.top__bottom__area}>
                                            <Image src={product2} alt="product 3" />
                                        </div>
                                        <div className={styles.top__bottom__area}>
                                            <Image src={product5} alt="product 4" />
                                        </div>
                                        <div className={styles.top__bottom__area}>
                                            <Image src={product3} alt="product 5" />
                                        </div>
                                </div>
                </div>
            </div>
       
     
      
      </>
    )
}
import React, { useEffect, useState } from 'react'
import data from 'database/data'

import styles from './[id].module.scss'

import { MdAddShoppingCart } from 'react-icons/md';
import { useRouter } from 'node_modules/next/router';

const ProductItem = () => {
    // const router = useRouter()

    const [productDetail, setProductDetail] = useState<TProduct | null >()

        const {
            query: {id},
        } = useRouter()
        
        useEffect(() => {
          if (id) {
            console.log(id);
            
            window.fetch(`/api/avo/${id}`)
          .then((response) => response.json())
          .then((data: TProduct) => {
              setProductDetail(data)
              console.log(productDetail);
              
          })
          }
          
        }, [id])
  return (
    <div className={styles.home_product_detail}>
      <section className={styles.header_product_detail}>
        <div>
          <img src={productDetail?.image} alt={productDetail?.name} />
        </div>
        <div>
          <h3>{productDetail?.name}</h3>
          <span>{productDetail?.price}</span>
          <br />
          <span className={styles.product_detail_sku}>{productDetail?.sku}</span>
          <div className={styles.header_product_detail_inputs__container}>
            <input type="number" name="" id="" />
            <button type='button' className={styles.header_product_detail_button}>
              <MdAddShoppingCart/> Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductItem
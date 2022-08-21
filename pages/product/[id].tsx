import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import data from 'database/data'
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
    <div>
        {/* {router.query.id} */}
        {productDetail?.name}
    </div>
  )
}

export default ProductItem
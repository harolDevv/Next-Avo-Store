import KawaiHeader from '@components/KawaiHeader/KawaiHeader'
import Link from 'node_modules/next/link'
import React, { useEffect, useState } from 'react'
import '../styles/index.module.scss'


const Home = () => {

  const [productList , setProductList] =  useState<TProduct[]>([])

  useEffect(() => {
    window.fetch('api/avo')
    .then(response => response.json())
    .then(({data,length}) => {
      setProductList(data)
    })
  }, [])
  
  return (
    <div className='home'>
      <KawaiHeader/>
      <div className='cards_container'>
        {
          productList.map( avo => {
            return(
              <Link key={avo.id}  href={`/product/${avo.id}`} passHref>
                <div key={avo.id} className='card'>
                  <img src={avo.image} alt="" />
                  <section className='card_info__container'>
                    <p>{avo.name}</p>
                    <span>{avo.price}</span>
                  </section>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
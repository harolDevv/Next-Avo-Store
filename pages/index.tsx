import KawaiHeader from '@components/KawaiHeader/KawaiHeader'
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
              <div key={avo.id} className='card'>
                <img src={avo.image} alt="" />
                <p>{avo.name}</p>
                <span>{avo.price}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
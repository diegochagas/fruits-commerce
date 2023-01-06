import { useEffect, useState } from 'react'
import appleImage from '../../assets/apple.jpg'
import bananaImage from '../../assets/banana.jpg'
import mangoImage from '../../assets/mango.jpg'
import pearImage from '../../assets/pear.jpg'
import pineappleImage from '../../assets/pineapple.jpg'

import api from '../../api'

import * as S from './styles'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      const data = await api.get('fruits')

      if (data) {
        setProducts(data)
      }
    }

    getProducts()
  }, [])
  
  return (
    <S.ProductsContainer>
      <S.ProductsList>
        <S.ProductsListHeader>
          <S.Title>Products</S.Title>
        </S.ProductsListHeader>

        <S.ProductsListContent>
          {products.map(product => (
            <S.ProductContainer key={product.id}>
              <S.ProductDetails>
                <S.ProductImage src={process.env.PUBLIC_URL + product.image} />

                <S.ProductTitle>{product.name}</S.ProductTitle>

                <S.ProductPrice>$ {product.price}</S.ProductPrice>
              </S.ProductDetails>

              <S.ProductAddButton>Add</S.ProductAddButton>
            </S.ProductContainer>
          ))}
        </S.ProductsListContent>
      </S.ProductsList>
    </S.ProductsContainer>
  );
}
import { useEffect, useState } from 'react'

import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components/Modal'
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
  const { isShowing, toggle } = useModal()
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()

  useEffect(() => {
    async function getProducts() {
      const data = await api.get('fruits')

      if (data) {
        setProducts(data.map((product: Product)  => {
          return { ...product, image: process.env.PUBLIC_URL + product.image }
        }))
      }
    }

    getProducts()
  }, [])

  function handlerShowDetailProduct(product: Product) {
    setSelectedProduct(product)

    toggle()
  }
  
  return (
    <>
      <S.ProductsContainer>
        <S.ProductsList>
          <S.ProductsListHeader>
            <S.Title>Products</S.Title>
          </S.ProductsListHeader>

          <S.ProductsListContent>
            {products.map(product => (
              <S.ProductContainer key={product.id}>
                <S.ProductDetails onClick={() => handlerShowDetailProduct(product)}>
                  <S.ProductImage src={product.image} />

                  <S.ProductTitle>{product.name}</S.ProductTitle>

                  <S.ProductPrice>${product.price}</S.ProductPrice>
                </S.ProductDetails>

                <S.ProductAddButton>Add</S.ProductAddButton>
              </S.ProductContainer>
            ))}
          </S.ProductsListContent>
        </S.ProductsList>
      </S.ProductsContainer>

      {selectedProduct && (
        <Modal isShowing={isShowing} hide={toggle}>
          <S.ProductDetailImage src={selectedProduct.image} />

          <S.ProductDetailName>{selectedProduct.name}</S.ProductDetailName>

          <S.ProductDetailDescription>
            <S.ProductDetailLabel>Price</S.ProductDetailLabel>

            <S.ProductDetailValue>${selectedProduct.price}</S.ProductDetailValue>
          </S.ProductDetailDescription>
        </Modal>
      )}
    </>
  );
}
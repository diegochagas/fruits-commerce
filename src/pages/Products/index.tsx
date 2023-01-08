import { useContext, useState } from 'react'

import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components/Modal'
import { Product, ProductContext } from '../../context/ProductContext'
import api from '../../api'

import * as S from './styles'

export function Products() {
  const { isShowing, toggle } = useModal()
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()
  const { products, updateCartProducts } = useContext(ProductContext)

  function handlerShowDetailProduct(product: Product) {
    setSelectedProduct(product)

    toggle()
  }

  async function handlerAddProduct(product: Product) {
    updateCartProducts(product.id, 1)
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

                <S.ProductAddButton onClick={() => handlerAddProduct(product)}>Add</S.ProductAddButton>
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

            <S.ProductDetailValue>$ {selectedProduct.price}</S.ProductDetailValue>
          </S.ProductDetailDescription>
        </Modal>
      )}
    </>
  );
}
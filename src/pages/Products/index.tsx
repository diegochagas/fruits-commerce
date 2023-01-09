import { useContext, useEffect, useState } from 'react'

import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components/Modal'
import { ProductContext } from '../../context/ProductContext'
import { Product } from '../../reducers/products/reducer'

import * as S from './styles'

export function Products() {
  const { isShowing, toggle } = useModal()
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()
  const { products, toggleCart, addProductToCart } = useContext(ProductContext)

  useEffect(() => {
    if (toggleCart) {
      toggleCart('show')
    }
  }, [toggleCart])

  function handlerShowDetailProduct(product: Product) {
    setSelectedProduct(product)

    toggle()
  }
  
  return (
    <>
      <S.ProductsContainer data-testid="products">
        <S.ProductsList>
          <S.ProductsListHeader>
            <S.Title>Products</S.Title>
          </S.ProductsListHeader>

          <S.ProductsListContent>
            {Array.isArray(products) && products.map(product => (
              <S.ProductContainer key={product.id}>
                <S.ProductDetails onClick={() => handlerShowDetailProduct(product)}>
                  <S.ProductImage src={product.image} />

                  <S.ProductTitle>{product.name}</S.ProductTitle>

                  <S.ProductPrice>${product.price}</S.ProductPrice>
                </S.ProductDetails>

                <S.ProductAddButton onClick={() => addProductToCart(product)}>Add</S.ProductAddButton>
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

            <S.ProductDetailValue>$ {selectedProduct.price.toFixed(2)}</S.ProductDetailValue>
          </S.ProductDetailDescription>
        </Modal>
      )}
    </>
  );
}
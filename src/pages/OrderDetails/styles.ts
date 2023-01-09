import styled from 'styled-components'

export const OrderDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const PDFContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 6rem 0;
`;

export const Title = styled.h2`
  text-transform: capitalize;
`

export const OrderDescription = styled.p`
  color: ${props => props.theme['gray-300']};
  margin: 2rem 0;
`

export const OrderTableHeaderCell = styled.th`
  background: ${props => props.theme['gray-600']};
  padding: 1rem;
  font-size: ${props => props.theme.small};
  text-transform: uppercase;
`

export const OrderTableCell = styled.td`
  padding: 1rem;
  font-size: ${props => props.theme.medium};
`

export const OrderTableDoubleCell = styled(OrderTableCell)`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const OrderTableFooterCell = styled(OrderTableCell)`
  border-top: 1px solid ${props => props.theme['gray-300']};
`

export const OrderTableImage = styled.img`
  width: 3rem;
  height: 3rem;
`

export const BackButton = styled.button`
  text-transform: uppercase;
  padding: .8rem;
  margin: 2rem 0;
`

export const PrintButton = styled.button`
  width: 10rem;
`
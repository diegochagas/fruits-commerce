import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Auth } from '../pages/Auth'
import { Products } from '../pages/Products'
import { OrderDetails } from '../pages/OrderDetails'
import { AuthContext } from '../context/AuthContext'

export function Router() {
  const { email } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {!email && (
          <>
            <Route path="/" element={<Navigate replace to="/auth" />} />

            <Route path="/products" element={<Navigate replace to="/auth" />} />
            
            <Route path="/order" element={<Navigate replace to="/auth" />} />

            <Route path="/auth" element={<Auth />} />
          </>
        )}

        {email && (
          <>
            <Route path="/" element={<Navigate replace to="/products" />} />

            <Route path="/auth" element={<Navigate replace to="/products" />} />

            <Route path="/products" element={<Products />} />

            <Route path="/order" element={<OrderDetails />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
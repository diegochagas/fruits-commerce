import { Routes, Route, Navigate } from 'react-router-dom'

import { Auth } from '../pages/Auth'
import { Products } from '../pages/Products'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/auth" />} />

      <Route path="/auth" element={<Auth />} />

      <Route path="/products" element={<Products />} />
    </Routes>
  )
}
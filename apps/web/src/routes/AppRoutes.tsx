import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from '../pages/home/HomePage.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

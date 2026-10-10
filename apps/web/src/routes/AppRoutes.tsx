import { BrowserRouter, Route, Routes } from 'react-router'
import { ExperiencesPage } from '../pages/experiences/ExperiencesPage.tsx'
import { HomePage } from '../pages/home/HomePage.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

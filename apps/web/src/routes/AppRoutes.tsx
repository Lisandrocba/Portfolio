import { BrowserRouter, Route, Routes } from 'react-router'
import { EducationPage } from '../pages/education/EducationPage.tsx'
import { ExperiencesPage } from '../pages/experiences/ExperiencesPage.tsx'
import { HomePage } from '../pages/home/HomePage.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

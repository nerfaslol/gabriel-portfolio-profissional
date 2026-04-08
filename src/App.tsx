import { HashRouter, Route, Routes } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme-provider'
import { PortfolioPage } from '@/pages/portfolio-page'
import { LessonPlanPage } from '@/pages/lesson-plan-page'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="nerfas-theme">
      <HashRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/aula" element={<LessonPlanPage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App

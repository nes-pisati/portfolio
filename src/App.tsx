import Menu from "./components/ui-kit/Menu"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Project from "./pages/Project"
import Footer from "./components/ui-kit/Footer"
import Intro from "./components/intro"
import ScrollToTop from "./components/ui-kit/ScrollToTop"

function AppContent() {
  const location = useLocation();
  const isIntro = location.pathname === '/';

  return (
    <>
      {!isIntro && <Menu backEnabled={false} />}
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>
      {!isIntro && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}

export default App

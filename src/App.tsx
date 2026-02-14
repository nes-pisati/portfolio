import Menu from "./components/ui-kit/Menu"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Project from "./pages/Project"
import Footer from "./components/ui-kit/Footer"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

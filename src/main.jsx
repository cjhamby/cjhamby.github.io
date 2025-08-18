import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './style.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import DigitalGallery from './pages/DigitalGallery.jsx'
import AnimationGallery from './pages/AnimGallery.jsx'
import RenderGallery from './pages/RenderGallery.jsx'
import NoPage from './pages/NoPage.jsx'
import Layout from './components/layout.jsx'
import TextileGallery from './pages/TextileGallery.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="digital_gallery" element={<DigitalGallery />} />
        <Route path="animation" element={<AnimationGallery />} />
        <Route path="renders" element={<RenderGallery />} />
        <Route path="textiles" element={<TextileGallery />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

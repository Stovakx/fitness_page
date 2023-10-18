import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import ProgramsPage from '../pages/ProgramsPage/ProgramsPage';
import TrainersPage from '../pages/TrainersPage/TrainersPage';
import NotFound from "../pages/NotFound/NotFound";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

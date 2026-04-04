import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import FAQs from '../pages/FAQs';
import Blog from '../pages/Blog';
import Testimonials from '../pages/Testimonials';
import Feedback from '../pages/Feedback';

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </BrowserRouter>

        </>
    )

};

export default AppRoutes;
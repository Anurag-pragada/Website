import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import FAQs from '../pages/FAQs';
import Blog from '../pages/Blog';
import Testimonials from '../pages/Testimonials';
import Feedback from '../pages/Feedback';
import WebsiteLayout from '../components/WebsiteLayout';
import BlogPostPage from "../pages/BlogPostPage";

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<WebsiteLayout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )

};

export default AppRoutes;
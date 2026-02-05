import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Student from './pages/Student';
import Placement from './pages/Placement';
import Resources from './pages/Resources';
import Infrastructure from './pages/Infrastructure';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';

// Placeholder pages for routing structure
const Placeholder = ({ title }) => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
    <p>Content coming soon...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student" element={<Student />} />
          <Route path="placement" element={<Placement />} />
          <Route path="resources" element={<Resources />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

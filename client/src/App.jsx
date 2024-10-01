/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Courses/Courses';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';
import EnrollNow from './pages/EnrollNow/EnrollNow';
import Payment from './pages/Payment/Payment';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import CategoryList from './pages/CategoryList/CategoryList';
import AddCategory from './pages/AddCategory/AddCategory';
import EditCategory from './pages/EditCategory/EditCategory';
import AddVideo from './pages/AddVideo/AddVideo';
import EditVideo from './pages/EditVideo/EditVideo';
import VideoList from './pages/VideoList/VideoList';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import UpscGallery from './pages/UpscGallery/UpscGallery';
import MpscGallery from './pages/MpscGallery/MpscGallery';
import SscGallery from './pages/SscGallery/SscGallery';
import FreeGallery from './pages/FreeGalley/FreeGallery';
import BankGallery from './pages/BankGallery/BankGallery';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/enrollnow" element={<EnrollNow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/editcategory/:id" element={<EditCategory />} />
          <Route path="/addvideo" element={<AddVideo />} />
          <Route path="/editvideo/:id" element={<EditVideo />} />
          <Route path="/videolist" element={<VideoList />} />
          <Route path="/videoplayer/:id" element={<VideoPlayer />} />

          {/* Routes for UPSC, MPSC, and SSC galleries */}
          <Route path="/upscgallery" element={<UpscGallery />} />
          <Route path="/mpscgallery" element={<MpscGallery />} />
          <Route path="/sscgallery" element={<SscGallery />} />\
          <Route path="/freegallery" element={<FreeGallery />} />

          <Route path="/bankgallery" element={<BankGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

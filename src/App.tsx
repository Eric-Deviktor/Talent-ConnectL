import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './animations.css';

// Layouts
import AdminLayout from './components/Layout/AdminLayout';
import FreelancerLayout from './components/Layout/FreelancerLayout';

// Auth Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserManagement from './pages/Admin/UserManagement';
import ProjectManagement from './pages/Admin/ProjectManagement';

// Company Pages
import CompanyDashboard from './pages/Company/CompanyDashboard';
import CompanyProjectManagement from './pages/Company/ProjectManagement';
import CreateProject from './pages/Company/CreateProject';

// Freelancer Pages
import FreelancerDashboard from './pages/Freelancer/FreelancerDashboard';
import ProfileManagement from './pages/Freelancer/ProfileManagement';
import PortfolioManagement from './pages/Freelancer/PortfolioManagement';
import ProjectApplications from './pages/Freelancer/ProjectApplications';
import ProjectBrowser from './pages/Freelancer/ProjectBrowser';
import Messages from './pages/Freelancer/Messages';

// Landing Page Components
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import PopularServices from './components/PopularServices';
import HowItWorks from './components/HowItWorks';
import TopFreelancers from './components/TopFreelancers';
import Footer from './components/Footer';

// Landing Page Component
const LandingPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <Hero />
    <Categories />
    <PopularServices />
    <HowItWorks />
    <TopFreelancers />
    <Footer />
  </div>
);

// Company Layout Component
const CompanyLayout = () => (
  <AdminLayout />
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/*" element={<Navigate to="/auth/login" replace />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="projects" element={<ProjectManagement />} />
            </Route>

            {/* Company Routes */}
            <Route path="/company" element={<CompanyLayout />}>
              <Route index element={<Navigate to="/company/dashboard" replace />} />
              <Route path="dashboard" element={<CompanyDashboard />} />
              <Route path="projects" element={<CompanyProjectManagement />} />
              <Route path="projects/create" element={<CreateProject />} />
            </Route>

            {/* Freelancer Routes */}
            <Route path="/freelancer" element={<FreelancerLayout />}>
              <Route index element={<Navigate to="/freelancer/dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="profile" element={<ProfileManagement />} />
              <Route path="portfolio" element={<PortfolioManagement />} />
              <Route path="applications" element={<ProjectApplications />} />
              <Route path="projects" element={<ProjectBrowser />} />
              <Route path="messages" element={<Messages />} />
            </Route>

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
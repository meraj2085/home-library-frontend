import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../pages/Footer';

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="py-16 min-h-screen">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
}

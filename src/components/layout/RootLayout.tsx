import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function RouteFallback() {
  return (
    <div className="flex-1 flex items-center justify-center bg-beige py-24">
      <Loader2 className="w-8 h-8 text-caramel animate-spin" aria-label="Memuat" />
    </div>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;

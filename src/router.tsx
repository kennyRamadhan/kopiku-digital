import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'tentang', element: <AboutPage /> },
      { path: 'kontak', element: <ContactPage /> },
    ],
  },
]);

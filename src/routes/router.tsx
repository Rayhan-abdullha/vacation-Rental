import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutPage from "../pages/About";
import ServicesPage from "../pages/Services";
import ApartmentPage from "../pages/Apartment";
import ContactsPage from "../pages/Contacts";
import BlogPage from "../pages/Blog";
import NotFound from "../components/NotFound";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/blog",
    element: <BlogPage/>
  },
  {
    path: "/contact",
    element: <ContactsPage/>
  },
  {
    path: "/services",
    element: <ServicesPage/>
  },
  {
    path: "/apartment-room",
    element: <ApartmentPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
  ]);

export default router
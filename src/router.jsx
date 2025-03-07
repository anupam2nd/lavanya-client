import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import RootLayout from './RootLayout'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

const router = createBrowserRouter([
    {
        path : "",
        element :<RootLayout />,
        children : [
            {
                path : "home",
                element : <Home />
            },
            {
                path : "services",
                element : <Services />
            },
            {
                path : "about-us",
                element : <AboutUs />
            }
        ]
    }
])

export default router;
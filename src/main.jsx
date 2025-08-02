import { createRoot } from 'react-dom/client'
import "./index.css"
import Navbar from "./components/Navbar.jsx"
import MainPage from "./components/MainPage.jsx"

createRoot(document.getElementById('root')).render(
 <>
 <Navbar/>
 <MainPage/>
 </>
)

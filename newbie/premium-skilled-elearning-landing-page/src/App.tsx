import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreviewStylesPage from "./pages/PreviewStylesPage.tsx";
import LandingPage from "./pages/LandingPage.tsx";

function App() {


    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/preview-styles' element={<PreviewStylesPage/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App

import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreviewStylesPage from "./pages/PreviewStylesPage.tsx";
import {Box} from "@chakra-ui/react";

function App() {

    return (
        <BrowserRouter>
            <Box minWidth={{base: '100vw'}}
                 margin={{base: '16px'}}
            >
                <Routes>
                    <Route path='/preview-styles' element={<PreviewStylesPage/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App

import RestaurantsPage from "./pages/RestaurantsPage"
import SpecificResturantPage from "./pages/SpecificResturantPage";
import { Container } from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {

  return (
    <Container >
        <Routes>
            <Route path="/" element={<RestaurantsPage />} />
            <Route path="/:restaurant" element={<SpecificResturantPage />}/>
        </Routes>
    </Container>
  );
}

export default App;

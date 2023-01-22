import RestaurantsPage from "./pages/RestaurantsPage";
import { Container } from "react-bootstrap";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {

  return (
    <Container fluid>
      <RestaurantsPage />
    </Container>
  );
}

export default App;

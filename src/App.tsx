import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BusinessList from "./components/BusinessList/BusinessList";
import Navbar from "./components/NavBar";
// import { configure } from "axios-hooks";
// import LRU from "lru-cache";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <BusinessList />
      </Container>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
import Maintenance from "./pages/Maintenance/Maintenance";
import NoMatch from "./pages/NoMatch/NoMatch";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Maintenance />} />
          <Route exact path="*" element={<NoMatch />} />

          {/* <Route path="/home" element={
            <>
              <Header />
              <Home />
            </>
          }>
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

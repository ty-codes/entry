import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
import NoMatch from "./pages/NoMatch/NoMatch";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
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

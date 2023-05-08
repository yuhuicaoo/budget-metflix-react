import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:searchId" element={<Movies/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

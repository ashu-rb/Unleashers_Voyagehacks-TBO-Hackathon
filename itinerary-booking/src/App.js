import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Nav mode="flights"/>} />
        <Route path = "/flights" element={<Nav mode="flights"/>} />
        <Route path = "/hotels" element={<Nav mode="hotels"/>}/>
      </Routes>
    </div>
  );
}

export default App;

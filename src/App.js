import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;

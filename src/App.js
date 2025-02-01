import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Loan from "./component/loan";  // Ensure 'Loan' is capitalized here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loan />} />  {/* Make sure 'Loan' is capitalized here too */}
      </Routes>
    </Router>
  );
}

export default App;

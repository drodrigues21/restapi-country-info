import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import CountryInfo from ".//components/CountryInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/countryInfo/:alpha3Code" element={<CountryInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

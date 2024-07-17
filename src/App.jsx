import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllMyBooks from "./components/AllMyBooks.jsx";
import { Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { romance } from "./data/romance.js";
import {
  ThemeContextProvider,
  ThemeContext,
} from "./context/ThemeContextProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ThemeWrapper from "./components/ThemeWrapper.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState(romance);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const resultTemp = romance.filter(
      (book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.asin.toLowerCase().includes(event.target.value)
    );
    setResultSearch(resultTemp);
  };
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MyNav handleSearch={handleSearch} />
        <ThemeWrapper>
          <Container>
            <Welcome />
            <Routes>
              <Route
                path="/"
                element={<AllMyBooks resultSearch={resultSearch} />}
              />
              <Route path="/details/:asin" element={<BookDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </ThemeWrapper>
        <MyFooter />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import AllMyBooks from "./components/AllMyBooks.jsx";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { romance, fantasy, horror, scifi, history } from "./data/romance.js";
import { ThemeContextProvider } from "./context/ThemeContextProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ThemeWrapper from "./components/ThemeWrapper.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("romance");
  const [resultSearch, setResultSearch] = useState(romance);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const resultTemp = getCategoryBooks().filter(
      (book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.asin.toLowerCase().includes(event.target.value)
    );
    setResultSearch(resultTemp);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setResultSearch(getCategoryBooks(selectedCategory));
  };

  const getCategoryBooks = (selectedCategory = category) => {
    switch (selectedCategory) {
      case "romance":
        return romance;
      case "history":
        return history;
      case "fantasy":
        return fantasy;
      case "horror":
        return horror;
      case "scifi":
        return scifi;
      default:
        return romance;
    }
  };

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MyNav handleSearch={handleSearch} handleCategoryChange={handleCategoryChange} />
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

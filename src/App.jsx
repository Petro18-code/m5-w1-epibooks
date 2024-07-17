import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx'
import Welcome from './components/Welcome.jsx'
import AllMyBooks from './components/AllMyBooks.jsx'
import { Container } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { romance } from './data/romance.js'
import { ThemeContextProvider, ThemeContext } from './context/ThemeContextProvider.jsx'

function App() {

  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState(romance);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const resultTemp = romance.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase())||book.asin.toLowerCase().includes(event.target.value));
    setResultSearch(resultTemp);
  }
  return (
    <ThemeContextProvider>
      <MyNav handleSearch={handleSearch} />
      <Container>
        <Welcome />
        <AllMyBooks resultSearch={resultSearch} />
      </Container>
      <MyFooter />
    </ThemeContextProvider>
  )
}

export default App;

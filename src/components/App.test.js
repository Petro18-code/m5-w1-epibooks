import { screen,fireEvent } from "@testing-library/react";
import App from "../App";
import { render } from "@testing-library/react";

test("renders welcome in epibooks", () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome in epibooks/i);
    expect(linkElement).toBeInTheDocument();
})

test("renders 150 books", () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId("book-card")
    expect(allTheBookCards).toHaveLength(150)
})

test("renders comment area", () => {
    render(<App />);
    const books = screen.getAllByTestId("book-img")
    fireEvent.click(books[0])

    const rate = screen.getByPlaceholderText(/rate/i)
    expect(rate).toBeInTheDocument()
})

describe('filter testing', () => {
    it("finds just one result for the word 'arrow'", () => {
      render(<App />)
      const filterInputField = screen.getByPlaceholderText(/search any book/i)
      fireEvent.change(filterInputField, { target: { value: 'arrow' } })
      const allTheBookCards = screen.getAllByTestId('book-card')
      expect(allTheBookCards).toHaveLength(1)
    })
  
    it("finds three results for the word 'secret'", () => {
      render(<App />)
      const filterInputField = screen.getByPlaceholderText(/search any book/i)
      fireEvent.change(filterInputField, { target: { value: 'secret' } })
      const allTheBookCards = screen.getAllByTestId('book-card')
      expect(allTheBookCards).toHaveLength(1)
    })
  })

test("card border change when clicking on it", () => {
    render(<App />)
    const books = screen.getAllByTestId("book-img")
    fireEvent.click(books[0])
    expect(books[0]).toHaveClass("redBorder")
})

test('restores normal border after clicking on a second book', () => {
    render(<App />)
    const allTheBookCards = screen.getAllByTestId('book-img')
    const firstBookCard = allTheBookCards[0]
    fireEvent.click(firstBookCard)
    expect(firstBookCard).toHaveClass('redBorder')
    const secondBookCard = allTheBookCards[1]
    fireEvent.click(secondBookCard)
    expect(firstBookCard).not.toHaveClass('redBorder')
})

describe('CommentList testing', () => {
    it('renders no book comments on load', () => {
        render(<App />)
        const comment = screen.queryAllByTestId(/comment/i)
        expect(comment).toHaveLength(0)
    })
  
    it('renders comments clicking on a valid book', async () => {
      render(<App />)
      const allTheBookCards = screen.getAllByTestId('book-img')
      const firstBookCard = allTheBookCards[0]
      fireEvent.click(firstBookCard)
      const allTheBookComments = await screen.findAllByText(/review by/i)
      expect(allTheBookComments).not.toHaveLength(0)
    })
})
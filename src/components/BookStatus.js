import { useBook } from "../context/BookContext"

export default function BookStatus() {

  const { book } = useBook();

  return (
  <div>
    {book.length}
  </div>
  )
}
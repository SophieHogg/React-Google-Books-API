import { useEffect, useRef, useState, React } from "react";
import BookCard from "../../components/Card/BookCard";
import styles from "./BooksContainer.module.scss";

const searchBooks = async (
    query,
    key = "AIzaSyBbNMtM5lvGlIV4W4cDecMlRAJU924sXCE"
) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
    );

    const data = await response.json();
    return data.items;
};

const SearchBooks = ({ initialValue = "", onSubmit }) => {
    const [internal, setInternal] = useState(initialValue);

    const handleChange = (e) => setInternal(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(internal);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={styles.BooksContainer__SearchBar__Input}
                value={internal}
                onChange={handleChange}
                placeholder="Search here"
            />
            <button className={styles.BooksContainer__SearchBar__SubmitBtn}>
                Search
            </button>
        </form>
    );
};

const emptySearch = () => {
    return <h2>Sorry, no books have been found for your query</h2>;
};

const BooksContainer = () => {
    const [search, setSearch] = useState("");
    const firstMount = useRef(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (firstMount.current === true) {
            firstMount.current = false;
            return;
        }

        searchBooks(search).then((searchedBooks) => setBooks(searchedBooks));
    }, [search]);
    return (
        <main className={styles.BooksContainer}>
            <div className={styles.BooksContainer__SearchBar}>
                <SearchBooks onSubmit={setSearch} />
            </div>
            <div className={styles.BooksContainer__BookCollection}>
                {(!books && (
                    <p>Sorry, no books were found for your query.</p>
                )) ||
                    (books && (
                        <div
                            className={
                                styles.BooksContainer__BookCollection__Grid
                            }
                        >
                            {books.map((book, index) => (
                                <BookCard key={index} data={book.volumeInfo} />
                            ))}{" "}
                        </div>
                    ))}
            </div>
        </main>
    );
};

export default BooksContainer;

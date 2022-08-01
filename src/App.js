import { React } from "react";
import "./App.css";
import "./global.scss";
import BooksContainer from "./containers/BooksContainer/BooksContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <BooksContainer />
            <Footer />
        </div>
    );
}

export default App;

import React from "react";
import styles from "./BookCard.module.scss";
import NoCover from "./../../assets/images/NoCover.png";

function BookCard({ data }) {
    const {
        title,
        authors,
        thumbnail,
        description,
        canonicalVolumeLink,
        imageLinks,
    } = data;
    return (
        <div className={styles.BookCard}>
            <div className={styles.BookCard__Image}>
                <img
                    className={styles.BookCard__Image__Image}
                    src={
                        (!imageLinks && NoCover) ||
                        (imageLinks.thumbnail && imageLinks.thumbnail)
                    }
                    alt={title}
                />
            </div>
            <h2 className={styles.BookCard__Title}>{title}</h2>
            <h4 className={styles.BookCard__Subtitle}>
                {(!authors && "Author Unknown") ||
                    (authors && authors.join(", "))}
            </h4>

            <p className={styles.BookCard__Description}>
                {(!description && "No description has been provided.") ||
                    (description && description)}
            </p>
            <div className={styles.BookCard__Button}>
                <a target="_blank" href={canonicalVolumeLink}>
                    <div className={styles.BookCard__Button__LinkToMoreInfo}>
                        On Google Books
                    </div>
                </a>
            </div>
        </div>
    );
}

export default BookCard;

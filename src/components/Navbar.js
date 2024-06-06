import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navebar = () => {
    const { books } = useContext(BookContext)
    return (
        <nav>
            <h1>Zarqa Reading List</h1>
            <p> Currently You have {books.length} books to get through</p>
        </nav>
    );
}
 
export default Navebar;

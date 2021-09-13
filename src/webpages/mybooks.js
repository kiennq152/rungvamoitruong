//file: src/webpages/mybooks.js
import React, { useEffect } from 'react';
const MyBooks = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
            <p>Journal 1...</p>
        </div>
    );
};
export default MyBooks;
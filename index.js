function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(json => renderBooks(json))
}

//fetch("string representing a URL to a data source")



function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
});
//API -APPLICATION PROGRAMMING INTERFACE -->EXPOSING DATAAND OR/FUNCTIONALITY TO THE PUBLIC FOR US.ALLOWS US TO ADD IMPORTANT DATA AND FUNCTIONALITY TO THE APPS WE BUILD
//JSON - LANGUAGE AGNOSTIC WAY OF SENDING DATA
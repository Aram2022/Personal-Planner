const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    // More books...
];

const results = document.querySelector("div");
const search = document.querySelector("input");
const button = document.querySelector("button");

function searchFoo() {
    results.innerHTML = "";

    var filter = books.filter((book) => {
        return (
            book["title"].toLowerCase().includes(search.value.toLowerCase()) ||
            book["author"].toLowerCase().includes(search.value.toLowerCase())
        );
    });

    if (!filter.length) {
        alert("No books found");
        search.value = "";
    } else {
        filter.forEach((book) => {
            for (let key in book) {
                const res = document.createElement("div");
                res.innerHTML = key + ": " + book[key];
                results.appendChild(res);
            }
        });
    }
}

button.addEventListener("click", function () {
    searchFoo();
});

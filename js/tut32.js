console.log("Welcome to tut32")
/*Create a class library and implement the following:
constructor must take the book list as an arguement
getBookList()
issueBook(bookName, user)
returnBook(bookName)
*/

class Library {
    constructor(givenBooks) {
        this.book = givenBooks;
        localStorage.setItem('books', JSON.stringify(this.book));
    }
    bookStack() {
        let bookList = [];
        let books = localStorage.getItem('books');
        if (books == null) {
            bookList = [];
        }
        else {
            bookList = JSON.parse(books);
        }
        return bookList;
    }
    bookAdd(bookName) {
        let bookList = [];
        let books = localStorage.getItem('books');
        if (books == null) {
            bookList = [];
        }
        else {
            bookList = JSON.parse(books);
        }
        bookList.push(bookName);
        localStorage.setItem('books', JSON.stringify(bookList));

    }
    bookDelete(bookName) {
        let bookList = [];
        let books = localStorage.getItem('books');
        if (books == null) {
            bookList = [];
        }
        else {
            bookList = JSON.parse(books);
        }
        let n = bookList.length;
        let a = bookList.indexOf(bookName);
        bookList.splice(a, 1);
        localStorage.setItem('books', JSON.stringify(bookList));
    }
    getBookList() {
        let bookList = this.bookStack();
        let n = bookList.length;
        console.log(`\nBooks List of library `);
        for (let i = 0; i < n; i++) {
            console.log(bookList[i], "\n");
        }
    }
    issueBook(bookName, user) {
        console.log(`\n${bookName} book is issued by ${user}`);
        this.bookDelete(bookName);
    }
    returnBook(bookName) {
        console.log(`\n${bookName} has been returned to the library`);
        this.bookAdd(bookName);
    }
}

let obj1 = new Library(['5 Point Someone', '2 States', 'The White Tiger', 'Half-Girlfriend']);
obj1.getBookList();
obj1.issueBook('Half-Girlfriend', 'Anshul');
obj1.getBookList();
obj1.returnBook('Half-Girlfriend');
obj1.getBookList();

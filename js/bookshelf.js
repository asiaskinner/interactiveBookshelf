/**
 * Bookshelf is an internal data structure
 * that manages Books.
 * @param {HTMLElement} htmlElement the element to render to
 * @param {Book[]} books an optional array of Books
 */
function Bookshelf(htmlElement, books = []) {
  this.books = books;
  this.htmlElement = htmlElement;
  this.visibleBooks = books;

  /**
   * Process an array of raw book information
   * to initialize Bookshelf properties
   * @param {{author: string[], language: string, subject: string[], title: string}[]} data an array of book data
   */
  this.seed = function (data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.render();
  };

  /**
   * Add a book to the Bookshelf
   * @param {Book} book
   */
  this.addBook = function (book) {
    this.books.push(book);
  };

  /**
   * Use internal Book array to rerender the
   * existing DOM element for this Bookshelf.
   */
  this.render = function () {
    /* NOTE: Change render! This is currently a barebones template. */
    const ul = document.createElement("ul");
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  };

  /**
   * @returns the number of favorite books
   */
  this.countFavoriteBooks = function () {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  };
//=====================================================
/**
   * @returns the avg number of book subjects
   */


  //what I think is happening: in sumBooks I want the 
    this.findAvgSubjectNumber = () => {
    //  const totalBooks = bookData.length;
      //WOO I got NaN!
//I want to divide the total number of array indexes in the Subjects key and divide that by bookData.length

// OK so what's annoying about this is that I can get ALL sorts of tutorials on how to add up the Numbers inside an array, but not adding the array length. 

// i want a variable that will contain the sum of subjects in all the books reduce?
// 
let sum = books.reduce((p, c, i) => {
  if (c.subject.length > p){
    return p += c.subject.length;
  }
}, 0);
//==== for each of my array indexes, I want to get the length of the 2nd index and add it to my sum
// let sum = 0;
// const booksArray = books;

// booksArray.forEach(getSum);
// function getSum(books){

// }
//divide sum of all subject by the length of book array
console.log(sum);
console.log(sum/books.length);


      // const sumSubjects = books.(books, books[i][2].length)
      //   let sum = 0;
      //   books.forEach(subject => {sum += subject[subject];});
      
      
// console.log("total declared")

//       books.forEach(book => { 
//         total += book;
//       });

// console.log("books.foreach")

// console.log(Math.floor(sumSubjects/bookData.length));
      
      // let totalSubjects = 0

      // const sumSubjects = books.reduce((acc, curr) => acc + books);

      // avgSubject = sumBooks/totalBooks;

      
      // console.log("hello")
      // return avgSubject;
    };

  /**
   * Filter visible books according to a given criteria function
   * @param {(book: Book) => boolean} criteria
   */
  this.filterVisibleBooks = function (criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  /**
   * Sort visible books according to a given compare function
   * @param {(a: Book, b: Book) => number} compareFn
   */
  this.sortVisibleBooks = function (compareFn) {
    this.visibleBooks.sort(compareFn);
    this.render();
  };
}

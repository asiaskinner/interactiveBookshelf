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
        bookInfo.title,
        bookInfo.numPages = Math.floor(Math.random() * 200) + 1,
        console.log(bookInfo.numPages),
    //ternary opperator
        bookInfo.category = bookInfo.numPages < 100 ? "Short Story" : "Novel",
        console.log(bookInfo.category)
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
//==================================================
/**
   * @builds new properties, numPages and category. numpages is randomly generated for each book. if the book has more than 100 pages it's category is novel, otherwise the category is short story
   */

  //add numPages property to book object
    //value of numPages is a random number between 0-200
  //add category property to book object
    //value of category is "short story" unless value of numPages is over 100, then it's "Novel"
//relationship btwn books and bookshelf
//relationship btwn class and add property
//   this.addProperties = function(book) {
//     book.numPages = Math.floor(Math.random() * 200) + 1;
//     console.log(book.numPages);
// //ternary opperator
//     book.category = book.numPages < 100 ? "Short Story" : "Novel";
//     console.log(book.category);

//   };

//==================================================
/**
   * @returns the number of non-english books
   */
  // so I want to return an array like I did before
  //cycle through the books and only add to the array if book.language !=== "en"
  // I need to use reduce to go through all this.
  
  // iterate through array... add 1 if language is not english...

  this.findNonEngNumber = function() {
      
      return books.reduce(
        (count, book) => (book.language !== "en" ? count + 1 : count), 0);
      
  }
    
  // const sum = bookData.reduce((acc, curr) => {
  //   return 
  // }
  //   const sum = bookData.reduce((acc, curr) => {
  //     if (!acc.includes(curr.language)) {
  //       return [...acc, curr.language];
  //     }
  //     return acc;
  // },[],);

  //   return sum.length;



//==================================================
/**
   * @returns the avg number of book subjects
   */


  //what I think is happening: in sumBooks I want the 
    this.findAvgSubjectNumber = () => {
      const bookSum = bookData.reduce((acc, curr) => [...acc, ...curr.subject],[],);

return Math.floor(bookSum.length/books.length);
    //  const totalBooks = bookData.length;
      //WOO I got NaN!
//I want to divide the total number of array indexes in the Subjects key and divide that by bookData.length

// OK so what's annoying about this is that I can get ALL sorts of tutorials on how to add up the Numbers inside an array, but not adding the array length. 

// i want a variable that will contain the sum of subjects in all the books reduce?
//I want sum to give me an array of subjects. So i can do sum.length/bookData.length

// let sum = bookData.reduce((count, book) => {
//   if (book.subject === )
// },0)
// let sum = books.reduce((p, c, i) => {
//   if (c.subject.length > p){
//     return p += c.subject.length;
//   }
// }, book.subject);
//==== for each of my array indexes, I want to get the length of the 2nd index and add it to my sum
// let sum = 0;
// const booksArray = books;

// booksArray.forEach(getSum);
// function getSum(books){

// }
//divide sum of all subject by the length of book array
// console.log(sum);



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
//----------------------------------------------





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

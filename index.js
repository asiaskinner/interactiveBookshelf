// --------------------------
//#region Initialization
// --------------------------
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);

//#endregion Initialization
//==================================

// --------------------------
//#region Favorite Feature
// --------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
  favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature
//==================================

// --------------------------
//#region Average Books Feature
// --------------------------
const avgSubjectNum = document.querySelector(".avgNumBooks");
avgSubjectNum.innerText = bookshelf.findAvgSubjectNumber(); // with this I get a 0 in my field, but that's good, right? Just means I need to iron out the math and I'll get the right number.

//#endregion avg books Feature
//==================================
// --------------------------
//#region non eng books
// --------------------------
const nonEngNum = document.querySelector(".nonEngBooks");
nonEngNum.innerText = bookshelf.findNonEngNumber(); // with this I get a 0 in my field, but that's good, right? Just means I need to iron out the math and I'll get the right number.

//#endregion avg books Feature
//==================================


// --------------------------
//#region Searching
// --------------------------
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const searchFn = (b) => b.title.toLowerCase().includes(query);
  bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching
//==================================


// --------------------------
//#region Adding Books
// --------------------------

const addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", () => {
  const newAuthInput = document.querySelector(".addAuth");
  const newLangInput = document.querySelector(".addLang");
  const newSubjectInput = document.querySelector(".addSubject");
  const newTitleInput = document.querySelector(".addTitle");

  //i need to push new object to bookData
  const newBook = {
    author: newAuthInput.value,
    language: newLangInput.value,
    subject: newSubjectInput.value,
    title: newTitleInput.value,
  }
  bookData.unshift(newBook);
  //I need to take my data from the consts I made here and input those into the bookInfo."---" properties.
  
  //use input from the html to make a new book .addBook
  //render bookshelf w new book

});

//#endregion Searching
//==================================
// --------------------------
//#region Sorting
// --------------------------
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  let sortFn;

  if (query === "titleaz") {
    sortFn = (a, z) => a.title.localeCompare(z.title);
  } else if (query === "titleza") {
    sortFn = (a, z) => z.title.localeCompare(a.title);
  }

  bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting
//==================================

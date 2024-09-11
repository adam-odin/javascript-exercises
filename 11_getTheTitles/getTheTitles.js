const getTheTitles = function(array) {
    return array.map((books) => books.title);
};

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]

// const groupByTitle = function(array) {
//     return array.reduce((object,value) => {
//         object[value.id] = value;
//         return object;
//         }, {})
//     };

// let booksByTitle = groupByTitle(books)

// const getTheTitles = groupByTitle(books);
// console.table(getTheTitles);


// Do not edit below this line
module.exports = getTheTitles;

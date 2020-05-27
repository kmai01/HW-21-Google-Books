import axios from "axios";

export default {
// Gets all books
getBooks: function() {

return axios.get("/api/books");

},
// Get the book with the given id

getBook: function(id) {

    return axios.get("api/books/" + id)
},

deleteBook: function(id) {

    return axios.delete("api/books/" + id)
},

saveBook: function(bookData) {

    return  axios.post("/api/books", bookData)

}
};
import axios from "axios";

export default {
    // Gets all books
    getPosts: function () {
        return axios.get("/api/post");
    },
    // Gets the book with the given id
    getPost: function (id) {
        return axios.get("/api/post/" + id);
    },
    // Deletes the book with the given id
    deletePost: function (id) {
        return axios.delete("/api/post/" + id);
    },
    // adds a post to the database
    createPost: function (postData) {
        return axios.post("/api/books", postData);
    }
};
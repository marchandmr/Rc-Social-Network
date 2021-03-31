import axios from "axios";

export default {

    //        POST Routes


    getPosts: function () {
        return axios.get("/api/posts");
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deletePost: function (id) {
        return axios.delete("/api/posts/" + id);
    },
    // adds a post to the database
    createPost: function (postData) {
        return axios.post("/api/posts", postData);
    },

    //      USER ROUTES

    // getUsers: function () {
    //     return axios.get("/api/user");
    // },
    // // Gets the post with the given id
    // getUser: function (id) {
    //     return axios.get("/api/user/" + id);
    // },
    // // Deletes the post with the given id
    // deleteUser: function (id) {
    //     return axios.delete("/api/user/" + id);
    // },
    // // adds a post to the database
    // createUser: function (userData) {
    //     return axios.post("/api/user", userData);
    // }
};
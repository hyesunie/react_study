const api = {
  getUsers: () =>
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    }),
  getPosts: (id = "1") =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    }),
};

export default api;

const requestOne = new Promise((resolve, reject) => {
  resolve(
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
});

const requestTwo = new Promise((resolve, reject) => {
  resolve(
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );
});

Promise.all([requestOne, requestTwo])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

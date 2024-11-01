async function awaitCall() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((user) => {
      console.log("USERS: ", user);
    })
    .catch((err) => {
      console.error(err.message);
    });
}

awaitCall();

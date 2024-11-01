const values = ["RAJA", "REAL", "LIVERPOOL", "MILAN", "LYON", "BAYERN"];

async function iterateWithAsyncAwait() {
  await values.map((value) => {
    return setTimeout(() => {
      console.log(value);
    }, 1000);
  });
}

iterateWithAsyncAwait();

async function messageOne() {
  setTimeout(() => {
    console.log("message number 1");
  }, 1000);
}

async function messageTwo() {
  setTimeout(() => {
    console.log("message number 2");
  }, 1000);
}

async function messageThree() {
  setTimeout(() => {
    console.log("message number 3");
  }, 1000);
}

async function chainedAsyncFunctions() {
  await messageOne();
  await messageTwo();
  await messageThree();
}

chainedAsyncFunctions()
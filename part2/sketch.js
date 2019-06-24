// disable ESLint warning; setup method called by p5 library as entry point for javascript
// eslint-disable-next-line no-unused-vars
function setup() {
  noCanvas();
  delayES8(1000)
    .then(() => createP("Hello"))
    .catch(err => console.error(err));

  delayES8("Not a number")
    .then(() => createP("Hello"))
    .catch(err => console.error(err));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error(`"${time}" is not a number.`));
    } else {
      setTimeout(resolve, time);
    }
  });
}

async function delayES8(time) {
  // this function returns a promise
  await delay(time);

  return;
}
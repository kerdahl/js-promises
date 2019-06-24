function setup() {
  noCanvas();
  delay(1000)
    .then(() => createP("Hello"))
    .catch(err => console.error(err));

  delay("Not a number")
    .then(() => createP("Hello"))
    .catch(err => console.error(err));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error(`"${time}" is not a number.`));
    }

    setTimeout(resolve, time);
  });
}
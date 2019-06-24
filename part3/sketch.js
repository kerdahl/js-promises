const wordnikAPI = `https://api.wordnik.com/v4/words.json/randomword?hasDictionaryDef=true&minDictionaryCount=1&api_key=WORDNIK_API_KEY_HERE}`;
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=GIPHY_API_HERE&limit=10&q=`;

function setup() {
  noCanvas();

  // Using promise format

  // with Wordnik API
  // fetch(wordnikAPI)
  //   .then(response => response.json())
  //   .then(json => {
  //     createP(json.word);
  //     return fetch(giphyAPI + json.word);
  //   })
  //   .then(response => response.json())
  //   .then(json => createImg(json.data[0].images['fixed_height_small'].url))
  //   .catch(err => console.log(err));

  // without Wordnik API
  // createP("cat");
  // fetch(giphyAPI + "cat")
  //   .then(response => response.json())
  //   .then(json => createImg(json.data[0].images['fixed_height_small'].url))
  //   .catch(err => console.log(err));

  // using Promises.all()

  let promises = [processData(), processData(), processData(), processData(), processData()];
  Promise.all(promises)
    .then(results => {
      results.forEach(result => {
        createP(result.word);
        createImg(result.img);
      })
    })
    .catch(err => console.error(err));

  // single result using async/await function

  // processData()
  //   .then(results => {
  //     createP(results.word);
  //     createImg(results.img);
  //   })
  //   .catch(err => console.error(err));
}

// with Wordnik API
// async function processData() {
//   const wordnikResponse = await fetch(wordnikAPI);
//   const wordnikData = await wordnikResponse.json();
//   const the_word = wordnikData.word;
//   const giphyResponse = await fetch(giphyAPI + the_word);
//   const giphyData = await giphyResponse.json();
//   const img_url = data.data[randInt(data.data.length)].images['fixed_height_small'].url;
//   return {
//     word: the_word,
//     img: img_url
//   }
// }

// without Wordnik API
async function processData() {
  const the_word = "cat";
  const response = await fetch(giphyAPI + "cat");
  const data = await response.json();
  const img_url = data.data[randInt(data.data.length)].images['fixed_height_small'].url;

  return {
    word: the_word,
    img: img_url
  }
}

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
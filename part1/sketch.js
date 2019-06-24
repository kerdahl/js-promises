//const wordnikAPI = `https://api.wordnik.com/v4/words.json/randomword?hasDictionaryDef=true&minDictionaryCount=1&api_key=WORDNIK_API_KEY_HERE}`;
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=GIPHY_API_KEY_HERE&limit=1&q=`;

// disable ESLint warning; setup method called by p5 library as entry point for javascript
// eslint-disable-next-line no-unused-vars
function setup() {
  noCanvas();

  // with Wordnik API
  //   fetch(wordnikAPI)
  //     .then(response => response.json())
  //     .then(json => {
  //       createP(json.word);
  //       return fetch(giphyAPI + json.word);
  //     })
  //     .then(response => response.json())
  //       .then(json => createImg(json.data[0].images['fixed_height_small'].url))
  //       .catch(err => console.log(err));

  // without Wordnik API
  createP("cat");
  fetch(giphyAPI + "cat")
    .then(response => response.json())
    .then(json => createImg(json.data[0].images['fixed_height_small'].url))
    .catch(err => console.log(err));
}
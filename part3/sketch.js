const wordnikAPI = `https://api.wordnik.com/v4/words.json/randomword?hasDictionaryDef=true&minDictionaryCount=1&api_key=WORDNIK_API_KEY_HERE}`;
const giphyAPI = `https://api.giphy.com/v1/gifs/search?api_key=GIPHY_API_KEY_HERE&limit=1&q=`;

// function setup() {
//   noCanvas();

// //   fetch(wordnikAPI)
// //     .then(response => response.json())
// //     .then(json => {
// //       createP(json.word);
// //       return fetch(giphyAPI + json.word);
// //     })
// //     .then(response => response.json())
// //       .then(json => createImg(json.data[0].images['fixed_height_small'].url))
// //       .catch(err => console.log(err));
// 
//   processData()
//     .catch(err => console.error(err));
// }

// async function processData() {
//   let wordnikResponse = await fetch(wordnikAPI);
//   let wordnikData = await wordnikResponse.json();
//   createP(wordnikData.word));
//   var giphyResponse = await fetch(giphyAPI + wordnikData.word);
//   var giphyData = await giphyResponse.json();
//   createImg(data.data[0].images['fixed_height_small'].url);
// }

function setup() {
  noCanvas();

  // don't have wordnikAPI yet, use default word of "cat"
  // createP("cat");
  // fetch(giphyAPI + "cat")
  //   .then(response => response.json())
  //   .then(json => createImg(json.data[0].images['fixed_height_small'].url))
  //   .catch(err => console.log(err));

  processData()
    .catch(err => console.error(err));
}

async function processData() {
  createP("cat");
  let response = await fetch(giphyAPI + "cat");
  let data = await response.json();
  createImg(data.data[0].images['fixed_height_small'].url);
}
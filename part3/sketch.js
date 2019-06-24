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
//     .then(results => {
//       createP(results.word);
//       createImg(results.img);
//     })
//     .catch(err => console.error(err));
// }

// async function processData() {
//   const wordnikResponse = await fetch(wordnikAPI);
//   const wordnikData = await wordnikResponse.json();
//   const the_word = wordnikData.word;
//   const giphyResponse = await fetch(giphyAPI + the_word);
//   const giphyData = await giphyResponse.json();
//   const img_url = data.data[0].images['fixed_height_small'].url;
//   return {
//     word: the_word,
//     img: img_url
//   }
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
    .then(results => {
      createP(results.word);
      createImg(results.img);
    })
    .catch(err => console.error(err));
}

async function processData() {
  const the_word = "cat";
  const response = await fetch(giphyAPI + "cat");
  const data = await response.json();
  const img_url = data.data[0].images['fixed_height_small'].url;

  return {
    word: the_word,
    img: img_url
  }
}
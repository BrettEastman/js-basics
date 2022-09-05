// There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

function uniqueStyles(albums) {
	// create stylesArr var
    var stylesArr = [];
    // iterate through albums 
    for (var i = 0; i < albums.length; i++) {
        //for each index, use split (',') to create currentArr
        currentAlbum = albums[i].split(',');
        for (j = 0; j < currentAlbum.length; j++) {
            //push each index to stylesArr
            stylesArr.push(currentAlbum[j]);
        } 
    }
    // iterate over stylesArr
    for (k = 0; k < stylesArr.length; k++) {
      // create currentWord var
      var currentWord = stylesArr[k];
      // iterate over the rest of the array
      for (l = k + 1; l < stylesArr.length; l++) {
        // if word is same as currentWord
        if (stylesArr[l] === stylesArr[k]) {
            // delete it with splice
            stylesArr.splice(l, 1);
        } 
      }
    }
    return stylesArr.length;
}

console.log(uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
])); // ➞ 9
  
console.log(uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
])); // ➞ 7
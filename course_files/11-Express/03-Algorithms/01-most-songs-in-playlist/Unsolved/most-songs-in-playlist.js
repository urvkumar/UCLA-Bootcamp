// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // [1, 1]
  // We're given 60 minutes, how many songs can we fit in?
  const sortedArray = arr.sort(function(a, b){return a-b});
  console.log(sortedArray);

  let duration = 0;
  let countOfSongs = 0;
  for(const song in sortedArray) {
    if(duration + song < 60) { 
      duration += song;
      countOfSongs++;
    } else {
      return countOfSongs;
    }
  }
  return countOfSongs;
};

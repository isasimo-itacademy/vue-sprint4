// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalscores = array
                      .filter(movie => movie.director == director)
                      .map(movie => movie.score);
  let result = parseFloat(totalscores.reduce((a, b) => a + b/ totalscores.length ,0).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(movie => movie.title);
  let result = titles
                  .sort()
                  .slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort(function (a, b) {
    // Sort by year
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
  
    // If the year number is the same, sort alphabetically
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let totalscores = array
                      .filter(movie => {
                        if (movie.genre.includes(category) && (movie.score !== "")) return true; // case sensitive
                      })
                      .map(movie => movie.score);
  let result = parseFloat(totalscores.reduce((a, b) => a + b / totalscores.length, 0).toFixed(2));
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = JSON.parse(JSON.stringify(array));

  result.map(function (movie) {
    let match = movie.duration.match(/\d+/g).map(Number);
    let hours = 0;
    let minutes = 0;
    if (match[0]) {
      hours = match[0] * 60;
    }
    if (match[1]) {
      minutes = match[1];
    }
    movie.duration = hours + minutes;
  });

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestyear = [...array]
                    .filter(movie => movie.year === year)
                    .sort(movie => Math.max(movie.score));
                    
  let result = [bestyear.shift()];
  return result;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

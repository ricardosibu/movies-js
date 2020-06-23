URL_PATH='https://api.themoviedb.org';
API_KEY='10d26c88dad639969040e77870d6f04b';

document.addEventListener("DOMContentLoaded", async () => {
    const movies = await getMovies();
    console.log(movies);
});

const getMovies = () => {
    const url = `${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
    return fetch(url)
    .then(response => response.json())
    .then(result => result.results)
    .catch(err => console.log(error));
}


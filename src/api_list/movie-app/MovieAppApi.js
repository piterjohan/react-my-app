import axios from "axios";

export async function movTrending(time) {
  const trendingURL =
    process.env.REACT_APP_TMBD_URL_API +
    "/trending/all/" +
    time +
    "?language=en-US";

  return await axios.get(trendingURL, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMBD_MOVIE_API_KEY,
    },
  });
}

export async function movDetail(movieID) {
  const movDetailUrl =
    process.env.REACT_APP_TMBD_URL_API +
    "/movie/" +
    movieID +
    "?language=en-US";

  return await axios.get(movDetailUrl, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMBD_MOVIE_API_KEY,
    },
  });
}

export async function movGenres() {
  const trendingURL =
    process.env.REACT_APP_TMBD_URL_API +
    "/genre/movie/list" +
    "?language=en";

  return await axios.get(trendingURL, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMBD_MOVIE_API_KEY,
    },
  });
}


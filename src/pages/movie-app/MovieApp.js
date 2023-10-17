import { useEffect, useState } from "react";
import "./MovieApp.css";
import TrendingList from "../../components/movie-app/trending-list/TrendingList";
import { movTrending, movGenres } from "../../api_list/movie-app/MovieAppApi";
function MovieApp() {
  const trendingDayLS = JSON.parse(localStorage.getItem("trendingDay"));
  const trendingWeekLS = JSON.parse(localStorage.getItem("trendingWeekLS"));
  // trending
  const [trendingText, setTrendingText] = useState("day");
  const [trending, setTrending] = useState(trendingDayLS ?? []);

  useEffect(() => {
    // console.log("localstorage", trendingLS);
    if (trendingDayLS == null) {
      const listTrending = movTrending(trendingText);
      listTrending
        .then(function (resp) {
          setTrending(resp.data);
          localStorage.setItem("trendingDay", JSON.stringify(resp.data));
        })
        .catch(function (error) {
          // handle error
          console.log("listTrending", error);
        });
    }
  });

  const trendingTime = (value) => {
    let onStorage;
    if (value === "day") {
      onStorage = "trendingDay";
    } else {
      onStorage = "trendingWeekLS";
    }

    if (trendingDayLS === null || trendingWeekLS === null) {
      const listTrending = movTrending(value);

      listTrending
        .then(function (resp) {
          setTrending(resp.data);
          localStorage.setItem(onStorage, JSON.stringify(resp.data));
        })
        .catch(function (error) {
          // handle error
          console.log("trendingTime error", error);
        });
    }

    setTrending(JSON.parse(localStorage.getItem(onStorage)));

    setTrendingText(value);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="heading-trending flex">
          <h1>Trending</h1>
          <div className="trending-btn">
            <button
              className={trendingText === "day" ? "active" : ""}
              onClick={() => trendingTime("day")}
            >
              Today
            </button>
            <button
              className={trendingText === "week" ? "active" : ""}
              onClick={() => trendingTime("week")}
            >
              This Week
            </button>
          </div>
        </div>

        <div className="trending-wrapper grid-container">
          <TrendingList trending={trending} />
        </div>
      </div>
    </>
  );
}

export default MovieApp;

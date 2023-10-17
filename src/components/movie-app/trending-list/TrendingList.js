import { NavLink } from "react-router-dom";
import "./TrendingList.css";

function TrendingList({ trending }) {
  return (
    <>
      {trending?.results?.map((trend) => (
        <div className="card grid-item" key={trend.id}>
          <div className="backdrop relative">
            <NavLink to={`/movie-app/${trend.id}`}>
              <img
                src={
                  process.env.REACT_APP_TMBD_IMG_URL +
                  "w500/" +
                  trend.poster_path
                }
                className="img-fluid img-trending"
                alt="Trending"
                loading="lazy"
              />
            </NavLink>
            <div className="percent absolute">
              <small>{Math.ceil(trend.vote_average * 100) / 10}%</small>
            </div>
          </div>
          <div className="trending-title">
            <h4>
              {trend.original_title
                ? trend.original_title
                : trend.original_name}
            </h4>
            <span>
              {trend.release_date ? trend.release_date : "Date Not Confirm Yet"}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default TrendingList;

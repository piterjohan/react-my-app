import { useParams } from "react-router-dom";
import "./DetailMovie.css";
import { movDetail } from "../../../api_list/movie-app/MovieAppApi";
import { useEffect, useState } from "react";

function DetailMovie() {
  const { id } = useParams();
  
  const [backgroundMovie, setBackgroundMovie] = useState("");
  const [isReady, setIsready] = useState(false);
  const [detailMovie, setDetailMovie] = useState();

  useEffect(() => {
    console.log("useeffect", id);
    const movdetail = movDetail(id);
    movdetail
      .then(function (resp) {
        setDetailMovie(resp.data);
        setIsready(true);

        setBackgroundMovie(
          process.env.REACT_APP_TMBD_IMG_URL +
            "/w1920_and_h800_multi_faces/" +
            resp.data.backdrop_path
        );
      })
      .catch(function (error) {
        // handle error
        console.log("DetailMovie", error);
      });
  }, []);

  return (
    <>
      {isReady ? (
        <div
          className="movie-background"
          style={{ backgroundImage: `url("${backgroundMovie}")` }}
        >
          <div className="custom-background">
            <div className="flex content-movie p-1">
              <div className="relative movie-backdrop">
                <img
                  src={
                    process.env.REACT_APP_TMBD_IMG_URL +
                    "/w300_and_h450_bestv2/" +
                    detailMovie.poster_path
                  }
                  alt={"movie images" + detailMovie.original_title}
                />
                <div className="absolute popularity">
                  <small>
                    {Math.ceil(detailMovie.vote_average * 100) / 10}%
                  </small>
                </div>
                <div className="absolute release-date">
                  <small>{detailMovie.release_date}</small>
                </div>
              </div>
              <div className="description-movie">
                <div className="title-movie center">
                  <h2>{detailMovie.original_title}</h2>
                </div>
                <div className="flex movie-label">
                  {detailMovie.genres?.map((genre) => (
                    <div key={genre.id}>
                      <small className="label">{genre.name}</small>
                    </div>
                  ))}
                </div>
                <div className="movie-descr justify">
                  <p>{detailMovie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container center">
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}

export default DetailMovie;

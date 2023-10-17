import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TodoPage from "./pages/todo/TodoPage";
import MovieApp from "./pages/movie-app/MovieApp";
import DetailMovie from "./pages/movie-app/detail-movie/DetailMovie";
function App() {
  const { innerWidth: width, innerHeight: height } = window;
  console.log("width", width, "height", height);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/todo-app" element={<TodoPage />} />
        <Route path="/movie-app">
          <Route index element={<MovieApp />} />
          <Route path=":id" element={<DetailMovie />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

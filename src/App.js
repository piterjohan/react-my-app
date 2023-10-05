import { useState } from "react";
import TodoPage from "./pages/todo/TodoPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  //tab
  const [tab, setTab] = useState("todo");

  const updateTab = (newTab) => {
    console.log("updatedTabe app", newTab);
    setTab(newTab);
  };

  return (
    <>
      <Navbar onTab={tab} updateTab={updateTab} />
      {tab === "todo" ? <TodoPage /> : ""}
    </>
  );
}

export default App;

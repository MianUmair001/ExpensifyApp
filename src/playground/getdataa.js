console.log("getData is running");
import axios from "axios";
import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/todos";
const App = () => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    setMovies(data.data);
    console.log(response, data);
  };
  return (
    <div>
      {Movies.map((movie) => (
        <p>{movie}</p>
      ))}
    </div>
  );
};
// const options = {
//   url: url,
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//   },
// };
// axios(options).then((response) => {
//   console.log(response.data[0]);
// });
export default App;

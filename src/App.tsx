import React, { useEffect, useState } from "react";
import "./App.css";
import InputBar from "./components/inputBar/InputBar.component";
import DisplayList from "./components/display-list/Display-list.component";
import LoadingScreen from "./components/loading/Loading.component";
function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (inputText) {
      setLoading(true);
      // console.log(inputText);
      fetch(
        `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${inputText}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "API",
            "x-rapidapi-host":
              "mashape-community-urban-dictionary.p.rapidapi.com",
          },
        }
      )
        .then((response) => response.json())
        .then(({ list }) => {
          // const {newData}=data;
          // console.log(data)
          setData(list);
        })
        .finally(() => setLoading(false));
    }
  }, [inputText]);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // @ts-ignore
  const changeHandler = (e) => {
    setInputText(e);
  };

  return (
    <div className="App">
      <div className="container">
        <InputBar changeHandler={changeHandler} inputText={inputText} />
        {loading ? <LoadingScreen /> : <DisplayList data={data} />}
      </div>
    </div>
  );
}

export default App;

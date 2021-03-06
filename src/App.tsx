import { useState } from "react";
import "./App.css";
import Search from "./search/Search";
import { Card } from "./Card/Card";
import { Detail } from "./detail/Detail";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState<any>([]);
  const [keyword, setKeyword] = useState<String>();
  const [par, setPar] = useState<any>([]);

  const api = (e: any) => {
    axios
      .get(`HTTPS://www.omdbapi.com/?apikey=54facb5d&s=${e}`)
      .then((response) => {
        setUsers(response.data.Search);
      });
  };
  const api2 = (e: any) => {
    axios
      .get(`HTTPS://www.omdbapi.com/?apikey=54facb5d&i=${e}`)
      .then((response) => {
        setPar(response.data);
      });
  };

  const ambil = async (e: any) => {
    api2(e.currentTarget.id);
  };

  const garux = (e: any) => {
    e.preventDefault();
    api(keyword);
  };

  const ubah = (e: any) => {
    setKeyword(e.target.value);
  };

  return (
    //style={users ? { backgroundImage: `url(${users[0].Poster})` } : { backgroundColor: 'rgb(203 213 225)' }}

    <div className="flex bg-gray-800">
      <div className="m-auto flex-col  w-screen">
        <div className="flex pt-5 pb-5">
          <h1 className="text-xl font-medium m-auto invert">Search Movie</h1>
        </div>
        <div className="pb-5">
          <Search change={ubah} click={garux} keyword={keyword} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-x-hidden">
          <Routes>
            <Route path="detail" element={<Detail items={par} />} />
            <Route path="/" element={<Card items={users} click={ambil} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Search from "./search/Search";
import { Card } from "./Card/Card";
import { Detail } from "./detail/Detail";
import axios from 'axios';
import { type } from 'os';
import { Route, Routes } from 'react-router-dom';

// interface User {
//   id: number;
//   firstName: string;
// }

// export type TUserList = User[]

function App() {
  const [users, setUsers] = useState<any>([])
  const [toogle, setToggle] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<String>()

  // useEffect(() => {
  //   axios.get(`http://www.omdbapi.com/?apikey=aa1a78d7&s=${keyword}`)
  //     .then((response) => {
  //       setUsers(response.data.Search);
  //     })
  // }, [])

  const api = (e: any) => {
    axios.get(`http://www.omdbapi.com/?apikey=aa1a78d7&s=${e}`)
      .then((response) => {
        setUsers(response.data.Search);
      })
  }

  const garux = (e: any) => {
    e.preventDefault()
    api(keyword)
    //setToggle(!toogle)
    //console.log(users);
    //setKeyword(e.target.nextElementSibling.value)

  }

  const ubah = (e: any) => {
    setKeyword(e.target.value)
  };

  return (
    //style={users ? { backgroundImage: `url(${users[0].Poster})` } : { backgroundColor: 'rgb(203 213 225)' }}

    <div className="flex bg-cover h-screen bg-gradient-to-r from-cyan-300 to-red-300">
      <div className='m-auto flex-col  w-screen backdrop-blur-2xl'>
        <div className='flex pt-5 pb-5'>
          <h1 className='text-xl font-medium m-auto invert'>Search Movie</h1>
        </div>
        <div className='pb-5'>
          <Search change={ubah} click={garux} keyword={keyword} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {/* {users ? users.map((m: any) => {
            return (
              <Card items={m} />

            ) */}


          {/* }) : `Tidak ada `} */}
          <Routes>
            <Route path="detail" element={<Detail />} />
            <Route path="/" element={<Card items={users} />} />


          </Routes>

        </div>
      </div>
    </div >
  );
}

export default App;

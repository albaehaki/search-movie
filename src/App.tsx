import React, { useEffect, useState } from 'react';
import './App.css';
import Search from "./search/Search";
import { Card } from "./Card/Card";
import axios from 'axios';
import { type } from 'os';

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

    <div className="flex">
      <div className='m-auto flex-col  w-screen'>
        <div className='flex pt-10 pb-5'>
          <h1 className='text-xl font-medium m-auto'>Search Movie</h1>
        </div>
        <div className='pb-5'>
          <Search change={ubah} click={garux} keyword={keyword} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {users ? users.map((m: any) => {
            return (
              <Card items={m} />

            )


          }) : `Loading... `}

        </div>
      </div>
    </div >
  );
}

export default App;

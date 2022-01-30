import React from 'react';
import { Link } from 'react-router-dom';

export const Detail: React.FunctionComponent<any> = ({ items }) => {
  return (
    //style={{ backgroundImage: `url(${items.Poster})` }}
    <div className=' w-screen bg-cover text-gray-200'>
      <div className=' backdrop-blur-md h-screen grid '>
        <Link className='absolute left-4 top-3 bg-slate-700 font-medium px-3 py-1' to="/">
          Kembali
        </Link>
        <div className='m-auto font-bold text-xl bg-blend-screen'>
          <h1 className='mix-blend-difference pt-3'>{items.Title}</h1>
        </div>
        <div>
          <div className='grid  grid-cols-1 sm:grid-cols-2 px-3 py-5'>
            <div className='m-auto'>
              <img className='' src={items.Poster} alt="" />
            </div>
            <div className='px-2 overflow-y-scroll h-full py-5'>
              <p>Years = {items.Year}</p>
              <p>Rated = {items.Rated}</p>
              <p>Released = {items.Released}</p>
              <p>Runtime = {items.Runtime}</p>
              <p>Genre = {items.Genre}</p>
              <p>Director = {items.Director}</p>
              <p>Writer = {items.Writer}</p>
              <p>Actors = {items.Actors}</p>
              <p>Plot = {items.Plot}</p>
              <p>Country = {items.Country}</p>
              <p>Awards = {items.Awards}</p>
              <p>Metascore = {items.Metascore}</p>
              <p>imdbRating = {items.imdbRating}</p>
              <p>imdbVotes = {items.imdbVotes}</p>
              <p>Type = {items.Type}</p>
              <p>DVD = {items.DVD}</p>
              <p>BoxOffice = {items.BoxOffice}</p>
              <p>Production = {items.Production}</p>
              <p>Website = {items.Website}</p>
            </div>
            <p className='px-2'>{items.Plot}</p>
          </div>
        </div>
      </div>
    </div>);
};

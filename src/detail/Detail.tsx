import React from 'react';

export const Detail: React.FunctionComponent<any> = ({ items }) => {
  return (
    <div style={{ backgroundImage: `url(${items.Poster})` }} className=' w-screen h-screen bg-cover'>
      <div className=' backdrop-blur-md h-screen grid backdrop-brightness-[100%]'>
        <div className='m-auto font-bold text-xl bg-blend-screen'>
          <h1 className='mix-blend-difference'>{items.Title}</h1>
        </div>
        <div>
          <div className='grid  grid-cols-1'>
            <div className='m-auto'>
              <img src={items.Poster} alt="" />
            </div>
            <div>
              <p>{items.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

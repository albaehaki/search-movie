import React from 'react';

function Search({ click, keyword }: any) {
  return <div className='flex m-auto'>
    <form className='w-[70%] sm:w-[60%] md:w[50%] lg:w-[50%] grid grid-cols-12 m-auto border-[1px]'>
      <input value={keyword} className='col-span-10 p-1 outline-none' type='text' />
      <input className='col-span-2 p-1' type='submit' value='search' onClick={click} />
    </form>
  </div>;
}

export default Search;

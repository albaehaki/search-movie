import React from 'react';
import img from "../1.jpg";

export const Card = ({ items }: any) => {
    return (
        <div key={items.Id} className='px-5 py-3 col-span-1'>
            <div>
                <img src={items.Poster} alt="" />
                <p>{items.Title}</p>
            </div>
        </div>);
};

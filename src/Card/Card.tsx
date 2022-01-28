import React from 'react';
import img from "../1.jpg";

export const Card = ({ items }: any) => {
    return (
        <div className='px-5 py-3 col-span-1'>
            {items.forEach((m: any) => {
                <div>
                    <p>{m.Title}</p>
                    <img src={m.Poster} alt="" />
                </div>
            })}
        </div>);
};

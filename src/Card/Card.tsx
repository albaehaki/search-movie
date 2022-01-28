import React from 'react';
import img from "../1.jpg";
import { useEffect, useState } from 'react';


export const Card: React.FunctionComponent<any> = ({ items }: any) => {

    const [judul, setJudul] = useState<boolean>(false);

    const title = () => {
        setJudul(!judul)
    }


    return (
        <>
            {items ? items.map((m: any) => {
                return (
                    <div style={{ backgroundImage: `url(${m.Poster})` }} key={m.Id} className="flex backdrop-blur flex-col px-5 py-3 col-span-1">
                        <img className='h-[250px]  m-auto' src={m.Poster} alt="" />
                        <p className='invert-[100%]'>{m.Title}</p>
                    </div>)
            }) : `tidak ada`}
        </>);
};

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
            {items ? items.map((m: any, i: number) => {
                return (
                    <div style={{ backgroundImage: `url(${m.Poster})` }} key={i} className=" col-span-1">
                        <div className='flex flex-col px-5 pb-3 pt-5 backdrop-blur-lg h-full backdrop-brightness-50'>
                            <img className='h-[250px]  m-auto' src={m.Poster} alt="" />
                            <p className='invert-[100%] font-normal'>{m.Title}</p>
                        </div>
                    </div>)
            }) : <p className='invert flex font-medium m-auto col-span-full'>Tidak di temukan</p>}
        </>);
};

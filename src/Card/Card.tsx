import React from "react";
import { Link } from "react-router-dom";

export const Card: React.FunctionComponent<any> = ({ items, click }: any) => {
  return (
    <>
      {items ? (
        items.map((m: any, i: number) => {
          return (
            <div
              style={{ backgroundImage: `url(${m.Poster})` }}
              key={i}
              className=" col-span-1"
            >
              <div className="flex flex-col hover:p-1 px-5 pb-3 pt-5 backdrop-blur-lg h-full backdrop-brightness-[80%]">
                <img
                  alt={m.Title}
                  className="h-[250px]  m-auto"
                  src={m.Poster}
                />
                <p className="text-gray-200 font-medium">{m.Title}</p>
                <Link
                  id={m.imdbID}
                  onClick={click}
                  className="absolute hover:backdrop-blur-sm hover:backdrop-brightness-[80%]  px-2 py-1  m-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] invert mix-blend-difference font-bold"
                  to="detail"
                >
                  Detail
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p className="invert flex font-medium m-auto col-span-full">
          Tidak di temukan
        </p>
      )}
    </>
  );
};

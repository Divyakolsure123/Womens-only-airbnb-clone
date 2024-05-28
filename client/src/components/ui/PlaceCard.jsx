import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  return (
    <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
      <div className="card " style={{color:"white",border:"solid gray 3px",borderRadius:'15px'}}>
        {photos?.[0] && (
          <img
            src={`${photos?.[0]}`}
            className="h-4/5 w-full rounded-xl object-cover"
          />
        )}
        <h2 className="truncate font-bold pl-2">{address}</h2>
        <h3 className="truncate text-sm text-gray-500 pl-2">{title}</h3>
        <div className="mt-1 pl-2">
          <span className="font-semibold">₹{price} </span>
          per night
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;

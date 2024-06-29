import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface Accommodation {
    name: string;
    location: {
        area: string;
        city: string;
    };
    rating: number;
    reviews: number;
    price: number;
    priceNote: string;
    image: string;
}

interface Props {
    accommodation: Accommodation;
}

const RecommentHotelCard: React.FC<Props> = ({ accommodation }) => {
    return (
        <div className="flex flex-col w-full p-1 bg-white shadow-xl rounded-sm">
            <img src={accommodation.image} alt={accommodation.name} className="w-full h-50 object-cover rounded-sm mt-2" />
            <div className="flex flex-col mt-4">
                <div className="text-sm font-medium text-black">{accommodation.name}</div>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        <span className=" text-gray-700">
                            <Stack spacing={1} >
                                <Rating name="half-rating-read" size='small' defaultValue={accommodation.rating} precision={0.5} readOnly />
                            </Stack>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3 text-blue-400 mx-0.5">
                            <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                        </svg>
                        <div className="text-gray-700 text-xs">{accommodation.location.area}, {accommodation.location.city}</div>
                    </div>
                </div>
                <div className="mt-1 text-gray-400 text-xs">{accommodation.priceNote}</div>
                <div className="mt-1 text-base font-400 text-rose-500">THB {accommodation.price}</div>
            </div>
        </div>
        );
    }

    export default RecommentHotelCard;
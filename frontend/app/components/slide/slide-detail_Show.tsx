import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";

interface Destination {
    city: string;
    accommodations: string;
    photo: string;
    description: string;
}

interface SlideShowProps {
    destinations: Destination[];
}

const SlideShowDetail: React.FC<SlideShowProps> = ({ destinations }) => {
    const properties = {
        duration: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        indicators: true,
        prevArrow: (
            <div className="nav prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div className="nav next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        )
    };

    return(
        <Slide {...properties}>
            {destinations.map((destination, index) => (
                <Link href={{ pathname: '/city/' + destination.city }} key={index}>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-full px-4">
                            <img src={destination.photo} alt={destination.city} className="w-full h-96 md:h-48 object-cover rounded" />
                            <div className="mt-4 text-lg font-medium text-black">{destination.city}</div>
                            <div className="text-gray-700 text-xs">{destination.accommodations} accommodations</div>
                        </div>
                    </div>
                </Link>
            ))}
        </Slide>
    );
    }

export default SlideShowDetail;
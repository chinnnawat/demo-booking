import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from "next/link";

interface PromotionData {
    title: string;
    description: string;
    photo: string;
}

interface SlideShowProps {
    data: PromotionData[];
}

const SlideShow: React.FC<SlideShowProps> = ({ data }) => {
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

    return (
        <Slide {...properties}>
            {data.map((item, index) => (
                <Link href={{ pathname: '/promotion/' + item.title }} key={index}>
                    <div className="flex justify-center">
                        <div className="flex flex-col w-full px-4">
                            <img src={item.photo} alt={item.title} className="w-full h-40 object-cover rounded" />
                        </div>
                    </div>
                </Link>
            ))}
        </Slide>
    );
}

export default SlideShow;

'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SlideShow from "./slide/slide-promo_Show";

const data = [
    {
        title: "Stay 3 nights, pay for 2",
        description: "Book 3 nights and get the 3rd night free",
        photo: "https://mercuryhotel.vn/storage/uploads/images/stay-3-pay-2-mercury-hotel-danang(1).jpg",
        code: "STAY3PAY2"
    },
    {
        title: "Stay 5 nights, pay for 3",
        description: "Book 5 nights and get the 4th and 5th nights free",
        photo: "https://www.secretsafari.com/images/1300/profile/240214/Blog-header-5-NIGHTS-FOR-3-MSAMBWENI-BEACH-HOUSE-.jpg",
        code: "STAY5PAY3"
    },
    {
        title: "Stay 7 nights, pay for 5",
        description: "Book 7 nights and get the 6th and 7th nights free",
        photo: "https://images.mirai.com/OFFERS%2FHOTELS%2F100375988%2F7%20for%205%20Nights2%20%282%29.png",
        code: "STAY7PAY5"
    },
];

export default function Promotion() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full bg-white">
                <p className="text-xl font-medium text-black">Loading...</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-full bg-white mb-16">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="relative w-full mb-4 text-center text-xl">
                    <p className="font-medium text-black">Flights & Activities Promotions</p>
                    <div className="absolute right-0 top-0">
                        <Link href="/flight-act">
                            <p className="text-blue-500 text-sm">View all</p>
                        </Link>
                    </div>
                </div>
                <div className="w-full text-center text-lg text-gray-700">
                    <SlideShow data={data} />
                </div>
            </div>
        </div>
    );
}

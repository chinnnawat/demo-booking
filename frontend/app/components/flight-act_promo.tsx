'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SlideShow from "./slide/slide-promo_Show";

const data = [
    {
        "title": "Save 20% on Round-Trip Flights Bangkok - Chiang Mai",
        "description": "Book now and save 20% on round-trip flights between Bangkok and Chiang Mai with our exclusive promotion.",
        "photo": "https://www.corendonairlines.com/images/FCCAMP-5241605625.JPEG",
        "code": "CHIANGMAI20"
    },
    {
        "title": "Buy One Get One Free: Scuba Diving in Phuket",
        "description": "Experience the underwater beauty of Phuket with our buy one get one free scuba diving offer.",
        "photo": "https://img.freepik.com/free-vector/buy-one-get-one-free-sticker-label-design_1017-16289.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=ais_user",
        "code": "PHUKET-B1G1"
    },
    {
        "title": "15% Off Historical Tours in Ayutthaya",
        "description": "Explore the ancient city of Ayutthaya with a 15% discount on all historical tours.",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHdSPaehjhmy6GMy6y8ZS_PS7e9JlPj2F6Q&s",
        "code": "AYUTTHAYA15"
    },
    {
        "title": "Save 30% on Hot Air Balloon Rides in Chiang Rai",
        "description": "Enjoy the breathtaking views of Chiang Rai with a 30% discount on hot air balloon rides.",
        "photo": "https://cdn5.vectorstock.com/i/1000x1000/03/04/save-30-percent-off-sale-discount-offer-price-vector-36020304.jpg",
        "code": "BALLOON30"
    },
    {
        "title": "10% Off Elephant Sanctuary Tours in Chiang Mai",
        "description": "Visit the elephant sanctuaries of Chiang Mai with a 10% discount on all tours.",
        "photo": "https://img.freepik.com/free-vector/abstract-sale-banner-template_23-2148755464.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais",
        "code": "ELEPHANT10"
    }
];


export default function FlightActPromo() {
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
    return(
        <div className="flex items-center justify-center h-full bg-white mb-16">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="relative w-full mb-4 text-center text-xl">
                    <p className="font-medium text-black">Flights & Activities Promotions</p>
                    <div className="absolute right-0 top-0">
                        <Link href="/promotions">
                            <p className="text-blue-500 text-sm">View all</p>
                        </Link>
                    </div>
                </div>
                <div className="w-full text-center text-lg text-gray-700">
                    <SlideShow data={data} />
                </div>
            </div>
        </div>
    )
}
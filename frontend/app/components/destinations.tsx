'use client'

import React, { useState, useEffect } from "react";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './styles.css'
import Link from "next/link";
import SlideShowDetail from "./slide/slide-detail_Show";

const destinations = {
    data: [
        {
            "city": "Bangkok",
            "accommodations": "12000",
            "photo": "https://files.world.thaipbs.or.th/2023/08/main-2.png",
            "description": "Bangkok, the capital of Thailand, is known for its vibrant street life, cultural landmarks, and bustling markets."
        },
        {
            "city": "Chiang Mai",
            "accommodations": "9600",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1200px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg",
            "description": "Chiang Mai, located in northern Thailand, is famous for its ancient temples, mountainous landscapes, and rich cultural heritage."
        },
        {
            "city": "Phuket",
            "accommodations": "1000",
            "photo": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg",
            "description": "Phuket is Thailand's largest island, known for its stunning beaches, vibrant nightlife, and luxury resorts."
        },
        {
            "city": "Pattaya",
            "accommodations": "14000",
            "photo": "https://ik.imagekit.io/tvlk/blog/2022/08/shutterstock_1008532504-1.jpg",
            "description": "Pattaya is a beach resort town known for its vibrant nightlife, water sports, and entertainment options."
        },
        {
            "city": "Krabi",
            "accommodations": "15000",
            "photo": "https://touringhighlights.com/wp-content/uploads/2022/05/Krabi-Thailand-1.jpg",
            "description": "Krabi is famous for its stunning limestone cliffs, clear waters, and numerous islands, including the popular Railay Beach."
        },
        {
            "city": "Ayutthaya",
            "accommodations": "2000",
            "photo": "https://meetmeindepartures.com/wp-content/uploads/2023/03/ayutthaya-itinerary-ayutthaya-ruins-canva.jpg",
            "description": "Ayutthaya, a UNESCO World Heritage site, is known for its ancient temples and historical ruins from the Ayutthaya Kingdom."
        },
        {
            "city": "Koh Samui",
            "accommodations": "1200",
            "photo": "https://content.r9cdn.net/rimg/dimg/75/a7/44202281-city-56280-1767207b463.jpg?width=1366&height=768&xhint=2611&yhint=2498&crop=true",
            "description": "Koh Samui is a popular island destination known for its palm-fringed beaches, coconut groves, and luxury resorts."
        },
        {
            "city": "Hua Hin",
            "accommodations": "9856",
            "photo": "https://lp-cms-production.imgix.net/2023-02/GettyImages-1328614648.jpg?sharp=10&vib=20&w=1200&w=600&h=400",
            "description": "Hua Hin is a beach resort town known for its royal palaces, golf courses, and water parks, offering a blend of relaxation and entertainment."
        },
        {
            "city": "Pai",
            "accommodations": "7500",
            "photo": "https://www.impulseodyssey.com/wp-content/uploads/2017/03/rice-terraces-2224264_1920.jpg",
            "description": "Pai is a small town in northern Thailand known for its scenic mountains, waterfalls, and relaxed atmosphere."
        },
        {
            "city": "Sukhothai",
            "accommodations": "1690",
            "photo": "https://thailand.go.th/uploads/posts/the_post_1684418221.webp",
            "description": "Sukhothai, a UNESCO World Heritage site, is known for its well-preserved historical park featuring ruins from the Sukhothai Kingdom."
        }
    ]
}

export default function Destinations() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
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
                <div className="mb-4 text-center text-xl">
                    <div className="flex flex-row">
                        <p className="font-medium text-black">Top destinations in Thailand</p>
                    </div>
                </div>
                <div className="w-full text-center text-lg text-gray-700">
                    <SlideShowDetail destinations={destinations.data} />
                </div>
            </div>
        </div>
    );
}
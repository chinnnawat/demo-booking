'use client';

import React from 'react';
import accommodations from '@/public/data/recommend.json';
import RecommentHotelCard from './card/recomment-hotel';
import Link from 'next/link';

export default function RecommentHome() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-xl font-medium text-center mb-4">Recommended Hotels</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {accommodations.recommen_hotel.map((accommodation, index:number) => (
                    <Link
                        key={index} 
                        href={`/hotel/${accommodation.name}/${accommodation.location.city}/detail/${accommodation.id}`}
                    >
                        <RecommentHotelCard key={index} accommodation={accommodation} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

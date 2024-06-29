'use client'
import { useParams } from "next/navigation";
import dataHotel from '@/public/data/detailHotel.json';

type Hotel = {
    id: number;
    property: {
        name: string;
        address: string;
        rating: number;
        review_summary: {
            rating: number;
            reviews_count: number;
            cleanliness: number;
            room_comfort_and_quality: number;
        },
        description: string;
        highlights: {
            distance_to_public_transport: string;
            car_parking: string;
            activities: string;
            swimming_pool: string;
            check_in_24_hours: string;
            wifi_free: boolean;
        },
        check_in: string;
        check_out: string;
    };
    rooms: Array<{
        type: string;
        popularity: string;
        last_booked: string;
        bed_type: string;
        size: string;
        view: string;
        balcony_terrace: boolean;
        non_smoking: boolean;
        price_per_night: number;
        currency: string;
        benefits: {
            cancellation_policy: boolean;
            parking: boolean;
            wifi: boolean;
            drinking_water: boolean;
            cashback_rewards: number;
            other_rewards_and_discounts: string;
        }
    }>;
}

type HotelData = {
    CollegeHaus: Hotel[];
};

export default function Page(){
    const params = useParams();
    const { name, city, id } = params as { name: string; city: string; id: string };

    // Cast dataHotel to the HotelData type
    const hotelData: HotelData = dataHotel as HotelData;

    // check id
    const hotel = hotelData.CollegeHaus.find((hotel) => hotel.id === Number(id));
    if(!hotel) return null;

    return (
        <div className="">
            {JSON.stringify(hotel)}
            <div></div>
        </div>
    )
}
'use client'

import { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './styles.css'

const destinations = {
    data: [
        {
            "name": "Bangkok",
            "country": "Thailand",
            "photo": "https://files.world.thaipbs.or.th/2023/08/main-2.png",
            "description": "Bangkok, the capital of Thailand, is known for its vibrant street life, cultural landmarks, and bustling markets."
        },
        {
            "name": "Chiang Mai",
            "country": "Thailand",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1200px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg",
            "description": "Chiang Mai, located in northern Thailand, is famous for its ancient temples, mountainous landscapes, and rich cultural heritage."
        },
        {
            "name": "Phuket",
            "country": "Thailand",
            "photo": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg",
            "description": "Phuket is Thailand's largest island, known for its stunning beaches, vibrant nightlife, and luxury resorts."
        },
        {
            "name": "Pattaya",
            "country": "Thailand",
            "photo": "https://ik.imagekit.io/tvlk/blog/2022/08/shutterstock_1008532504-1.jpg",
            "description": "Pattaya is a beach resort town known for its vibrant nightlife, water sports, and entertainment options."
        },
        {
            "name": "Krabi",
            "country": "Thailand",
            "photo": "https://touringhighlights.com/wp-content/uploads/2022/05/Krabi-Thailand-1.jpg",
            "description": "Krabi is famous for its stunning limestone cliffs, clear waters, and numerous islands, including the popular Railay Beach."
        },
        {
            "name": "Ayutthaya",
            "country": "Thailand",
            "photo": "https://www.placesofjuma.com/ayutthaya-thailand/wat-chai-watthanaram-4-2",
            "description": "Ayutthaya, a UNESCO World Heritage site, is known for its ancient temples and historical ruins from the Ayutthaya Kingdom."
        },
        {
            "name": "Koh Samui",
            "country": "Thailand",
            "photo": "https://content.r9cdn.net/rimg/dimg/75/a7/44202281-city-56280-1767207b463.jpg?width=1366&height=768&xhint=2611&yhint=2498&crop=true",
            "description": "Koh Samui is a popular island destination known for its palm-fringed beaches, coconut groves, and luxury resorts."
        },
        {
            "name": "Hua Hin",
            "country": "Thailand",
            "photo": "https://lp-cms-production.imgix.net/2023-02/GettyImages-1328614648.jpg?sharp=10&vib=20&w=1200&w=600&h=400",
            "description": "Hua Hin is a beach resort town known for its royal palaces, golf courses, and water parks, offering a blend of relaxation and entertainment."
        },
        {
            "name": "Pai",
            "country": "Thailand",
            "photo": "https://www.impulseodyssey.com/wp-content/uploads/2017/03/rice-terraces-2224264_1920.jpg",
            "description": "Pai is a small town in northern Thailand known for its scenic mountains, waterfalls, and relaxed atmosphere."
        },
        {
            "name": "Sukhothai",
            "country": "Thailand",
            "photo": "https://thailand.go.th/uploads/posts/the_post_1684418221.webp",
            "description": "Sukhothai, a UNESCO World Heritage site, is known for its well-preserved historical park featuring ruins from the Sukhothai Kingdom."
        }
    ]
}

export default function Destinations() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3;

    const next = () => {
        if(currentIndex < destinations.data.length - itemsPerPage ){
            setCurrentIndex(currentIndex + itemsPerPage)
        }
    };

    const prev = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - itemsPerPage)
        }
    };

    return (
      <div className="flex items-center justify-center h-full bg-white">
        <div className="flex flex-col items-center justify-center w-full xl:mx-96 ">
            <div className="mb-4 text-center text-xl">
                <p className="font-medium text-black">Top destinations in Thailand</p>
            </div>
            <div className="text-center text-lg text-gray-700 w-full">
                <div className="flex justify-between">
                    <TransitionGroup className="flex w-full">
                        {destinations.data.slice(currentIndex, currentIndex + itemsPerPage).map((destination) => (
                            <CSSTransition key={destination.name} classNames="slide" timeout={300}>
                                <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 px-4">
                                    <img src={destination.photo} alt={destination.name} className="w-full h-96 object-cover rounded" />
                                    <div className="mt-4 text-lg font-medium text-black">{destination.name}</div>
                                    <div className="text-gray-700 text-base">{destination.country}</div>
                                </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
            <button onClick={prev} disabled={currentIndex === 0} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer">
                Prev
            </button>
            <button onClick={next} disabled={currentIndex >= destinations.data.length - itemsPerPage} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer">
                Next
            </button>
        </div>
      </div>
    )
}

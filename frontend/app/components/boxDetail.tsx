'use client';
import { useState } from 'react';

export default function BoxDetail() {

  // Dropdown
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // nextImage
  

    return(
        <div className='h-full bg-white'>
          <section className="absolute inset-0 flex items-start justify-center h-96">
              <div className="pt-32 p-4 rounded-xl">
                {/* title */}
                <div className="mb-4">
                  <p className="text-center text-3xl font-medium text-white">See the world for less</p>
                </div>

                {/* Header */}
                <div className="w-full bg-white border border-gray-200 rounded-xl shadow-lg relative z-10 -mb-20">
                  <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-xl sm:flex rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                    <li className="w-full">
                        <button id="stats-tab" aria-selected="true" className="inline-block w-32 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none">
                          Hotels
                        </button>
                    </li>
                    <li className="w-full">
                        <button id="stats-tab" aria-selected="true" className="inline-block w-32 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none">
                          Homes & Apts
                        </button>
                    </li>
                    <li className="w-full">
                        <button id="faq-tab" aria-selected="true" className="inline-block w-32  p-4 rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none">
                          Activities
                        </button>
                    </li>
                  </ul>
                </div>

                
              </div>
          </section>
          {/* Box detail */}
          <div className="absolute inset-40 flex items-start justify-center">
            <div id="fullWidthTabContent" className=" border-gray-200 relative z-5 pt-16 w-[1000px]">
                    <div className=" p-4 bg-gray-50 rounded-2xl md:p-8 shadow-lg">
                      {/* search bar */}
                      <form action="" className="max-w-full mx-auto mb-3">
                          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                          <div className="relative">
                              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                  <svg className="w- h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                  </svg>
                              </div>
                              <input type="search"id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-white " placeholder="Enter a destination or property" required />
                          </div>
                      </form>

                      {/* Date selection */}
                      <div className="flex flex-row">
                        <div className="border border-gray-300 rounded-lg bg-white">
                          <div className="flex flex-row divide-x">
                            {/* CheckIn */}
                            <div className="flex flex-row w-64 h-16 items-center px-2 cursor-pointer">
                              <div className="mr-2">
                                <svg className="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />  
                                  <polyline points="10 17 15 12 10 7" />  
                                  <line x1="15" y1="12" x2="3" y2="12" />
                                </svg>
                              </div>
                              <div className="flex flex-col">
                                <div>02/Jul/2024</div>
                                <p className="text-gray-400">Wednesday</p>
                              </div>
                            </div>
                            {/* CheckOut */}
                            <div className="flex flex-row w-64 h-16 items-center  px-2 cursor-pointer">
                              <div className="mr-2">
                                <svg className="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  
                                  <polyline points="16 17 21 12 16 7" />  <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                              </div>
                              <div className="flex flex-col">
                                <div>04/Jul/2024</div>
                                <p className="text-gray-400">Friday</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Customer */}
                        <div className="relative flex flex-row ml-3 border border-gray-300 rounded-lg bg-white w-full">
                          <div className='flex flex-col w-full justify-center'>
                            <button 
                              id="dropdownDefaultButton" 
                              onClick={toggleDropdown}
                              className="text-black bg-white focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center h-full justify-between" 
                              type="button">
                                <div className='flex flex-row justify-center items-center'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                  </svg>
                                  <div className='flex flex-col ml-3 w-20 items-start'>
                                    <div className='content-end'>2 adults</div>
                                    <div className='content-end text-gray-400'>1 room</div>
                                  </div>
                                </div>
                                {/* Dropdown button  */}
                                <svg 
                                className="w-2.5 h-2.5 ms-3" 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 10 6">
                                  <path 
                                    stroke="currentColor" 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="m1 1 4 4 4-4"
                                  />
                                </svg>
                            </button>
                            <div id="dropdown" className={`absolute z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full mt-60`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                  <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                                  </li>
                                  <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                                  </li>
                                  <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                                  </li>
                                  <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
                                  </li>
                                </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>

          {/* SearchButton */}
          <div className="absolute z-5 inset-[400px] flex items-start justify-center ">
            <button className="p-4 bg-blue-500 rounded-lg text-white w-96 text-xl shadow-lg">SEARCH</button>
          </div>
        </div>
    )
}
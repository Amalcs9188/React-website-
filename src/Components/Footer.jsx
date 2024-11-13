import React from 'react'
import { Typography } from "@material-tailwind/react";


const Footer = () => {
    return (
        <div>


            <footer
                className="bg-gray-200 text-center text-white items-center justify-center flex md:overflow-x-auto">
                <div className="container p-6">
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                        <div className="mb-6 lg:mb-0">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
                                className="w-full rounded-md shadow-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap my-10 items-center justify-center gap-y-6 gap-x-12 bg-gray text-center md:justify-between">
        <span className=' text-black text-3xl '><span className=' text-[#f53a3a]'>LIST</span> RACE</span>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023@something
      </Typography>
                    
                </div>
                

            
            </footer>





        </div>
    )
}

export default Footer

import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <>
            <div className="hero-wrapper">
                <div className='hero-contents '>
                    <h1  className=' my-7'>best place to find and explore
                        that <br /> all you need</h1>

                    <h6 className=' my-6'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</h6>
                    <div className='search-wrapper'>
                        <div className="Search" style={{ borderRight: "1px solid gray", borderWidth: '1px' }}>
                            <label htmlFor="what">What?</label>
                            <input type="text" placeholder='ex: place,resturent,food' />
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className="Search">
                            <label htmlFor="what">Location?</label>
                            <input type="text" placeholder='ex: London,Delhi,Hussan' />
                            <i class="fa-solid fa-location-crosshairs"></i>

                        </div>
                        <button className=' rounded-lg'>
                            SEARCH <i className="fa-solid fa-magnifying-glass search-x"></i>
                        </button>
                    </div>
                    <div className="hero-footer">
                        <div className="hero-fcontens">
                            <i class="fa-solid fa-utensils"></i>
                            <h6>Resturents</h6>
                            <p>150 Listing</p>

                        </div>
                        <div className="hero-fcontens">
                            <i class="fa-solid fa-earth-africa"></i>
                            <h6>Destination</h6>
                            <p>178 Listing</p>

                        </div>
                        <div className="hero-fcontens">
                            <i class="fa-solid fa-hotel"></i>
                            <h6>Hotels</h6>
                            <p>198 Listing</p>

                        </div>
                        <div className="hero-fcontens">
                            <i class="fa-solid fa-stethoscope"></i>
                            <h6>Health</h6>
                            <p>166 Listing</p>


                        </div>
                        <div className="hero-fcontens">
                            <i class="fa-solid fa-warehouse"></i>
                            <h6>Real Estate</h6>
                            <p>185 Listing</p>

                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Hero